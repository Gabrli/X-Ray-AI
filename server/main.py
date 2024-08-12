import cv2 as cv
import matplotlib.pyplot as plt
import numpy as np
from tensorflow.keras import layers, models, datasets
import os

(training_images, training_labels), (testing_images, testing_labels) = datasets.cifar10.load_data()
training_images = training_images / 255
training_images, testing_images = training_images / 255.0, testing_images / 255.0
class_names = ['Plane', 'Car', 'Bird', 'Cat', 'Deer', 'Dog', 'Frog', 'Horse', 'Ship', 'Truck']

training_images = training_images[:20000]
training_labels = training_labels[:20000]


model = models.Sequential()
model.add(layers.Conv2D(32, (3,3), activation='relu', padding='same', input_shape=(32,32, 3)))
model.add(layers.BatchNormalization())
model.add(layers.MaxPooling2D((2,2)))
model.add(layers.Conv2D(64, (3,3), activation='relu', padding='same'))
model.add(layers.BatchNormalization())
model.add(layers.MaxPooling2D((2,2)))
model.add(layers.Conv2D(128, (3,3), activation='relu', padding='same'))
model.add(layers.BatchNormalization())
model.add(layers.MaxPooling2D((2,2)))
model.add(layers.Flatten())
model.add(layers.Dense(256, activation='relu'))
model.add(layers.Dense(10, activation='softmax'))

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

model.fit(training_images, training_labels, epochs=10)

test_img_path = os.path.join(os.path.dirname(__file__), 'car.jpg')
test_img = cv.imread(test_img_path)
test_img = cv.resize(test_img, (32,32))
test_img = cv.cvtColor(test_img, cv.COLOR_BGR2RGB)
test_img = test_img / 255.0
test_img = np.expand_dims(test_img, axis=0)

prediction = model.predict(test_img)
prediction_class = np.argmax(prediction)
print(f"class name is: {class_names[prediction_class]}")
