import cv2 as cv
import numpy as np
from tensorflow.keras import layers, models, regularizers 
from tensorflow.keras.callbacks import EarlyStopping 
from sklearn.model_selection import train_test_split
import os

class_names = ['avulsion', 'comminuted', 'greenstick', 'hairline', 'impacted', 'longitudinal', 'oblique', 'pathological', 'spiral']
training_images = []
training_labels = []
testing_images = []
testing_labels = []

path_to_dataset = os.path.join(os.path.dirname(__file__), 'dataset')

def buildData(images, labels, dataName):
    for class_folder in os.listdir(path_to_dataset):
     class_folder_path = os.path.join(path_to_dataset, class_folder)
     if not os.path.isdir(class_folder_path):
        continue 
     data_folder_path = os.path.join(class_folder_path, dataName)
     
     for img_name in os.listdir(data_folder_path):
        img_path = os.path.join(data_folder_path, img_name)
        img = cv.imread(img_path)
        img = cv.resize(img, (32,32))
        img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
        images.append(img)
        labels.append(class_names.index(class_folder))

buildData(training_images,training_labels, "Train")
buildData(testing_images, testing_labels, "Test")

images = np.concatenate([training_images, testing_images])
labels = np.concatenate([training_labels, testing_labels])

train_images, test_images, train_labels, test_labels = train_test_split(images, labels)

train_images = np.array(train_images) / 255.0
train_labels = np.array(train_labels)

test_images = np.array(test_images) / 255.0
test_labels = np.array(test_labels)

num_classes = len(class_names)

model = models.Sequential()
model.add(layers.Conv2D(32, (3,3), activation='relu', input_shape=(32,32,3)))
model.add(layers.RandomFlip("horizontal"))  
model.add(layers.RandomRotation(0.2))        
model.add(layers.RandomZoom(0.2))     
model.add(layers.MaxPooling2D((2,2)))
model.add(layers.Dropout(0.1))
model.add(layers.Conv2D(64, (3,3), activation='relu', padding="same"))
model.add(layers.MaxPooling2D((2,2)))
model.add(layers.Dropout(0.2))
model.add(layers.Conv2D(128, (3,3), activation='relu', padding="same"))
model.add(layers.MaxPooling2D((2,2)))
model.add(layers.Dropout(0.3))
model.add(layers.Conv2D(256, (5,5), activation='relu', padding="same"))
model.add(layers.MaxPooling2D((2,2)))
model.add(layers.Dropout(0.4))
model.add(layers.Flatten()) 
model.add(layers.Dropout(0.5))
model.add(layers.Dense(128,  activation='relu', kernel_regularizer=regularizers.l2(0.00001)))
model.add(layers.Dense(num_classes, activation="softmax"))
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
 
model.fit(train_images, train_labels, epochs=2200, validation_data=(test_images, test_labels) )

model.save('server/my_model.h5') 
