from fastapi import FastAPI, File
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model  # type: ignore
import os 
import cv2 as cv
import numpy as np
from io import BytesIO
from PIL import Image
app = FastAPI()

origins = [
    'http://localhost:5173'
]
class_names = ['avulsion', 'comminuted', 'greenstick', 'hairline', 'impacted', 'longitudinal', 'oblique', 'pathological', 'spiral']

app.add_middleware(
    CORSMiddleware,
    allow_origins= origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/prompt')
async def PromptToModel(file: bytes = File(...)):
    try:
     model_path = os.path.join(os.path.dirname(__file__), '..', 'server/my_model.keras')
     model = load_model(model_path)
     user_img = Image.open(BytesIO(file))
     user_img = user_img.resize((32,32))
     user_img_np = np.array(user_img)
     user_img_np = cv.cvtColor(user_img_np, cv.COLOR_BGR2RGB)
     user_img_np = user_img_np / 255.0
     user_img_np = np.expand_dims(user_img_np, axis=0)
     prediction = model.predict(user_img_np)
     prediction_class = np.argmax(prediction)
    except FileNotFoundError:
       ''
    return {"res": class_names[prediction_class]}