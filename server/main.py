import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt 
from tensorflow.keras import  layers, models
import random
import os

main_dataset_path = os.path.join(os.path.dirname(__file__), 'datasets')
training_images = []
testing_images = []
trainig_labels = []
testing_labels = []
images = []
labels = []
subfolders = [f.name for f in os.scandir(main_dataset_path) if f.is_dir()]

class_names = ['galaxy', 'moon', 'nebula', 'planet', 'star']


for subfolder in subfolders:
    #labels.append(subfolder)
    print(subfolder)
    label_index = class_names.index(subfolder) 
    subfolder_path = os.path.join(main_dataset_path, subfolder)

    for root, dirs, files in os.walk(subfolder_path):
        for file in files:
            file_path = os.path.join(root, file)
            img = cv.imread(file_path)
            img = cv.resize(img, (32,32))
            images.append(img)
            labels.append(label_index)
            


random.shuffle(images)
split_index = len(images) // 2


print("training:")
training_images = np.array(images[:split_index])
trainig_labels = np.array(labels[:split_index])
print(training_images)
print("----------------------")
print("Testing")
testing_images = np.array(images[split_index:])
testing_labels  = np.array(labels[split_index:])
print(testing_images)

for i in range(30):
    plt.subplot(10,3, i+1)
    plt.xticks([])
    plt.yticks([])
    plt.imshow(training_images[i])
    plt.xlabel(class_names[trainig_labels[i]])
plt.show()

model = models.Sequential()
model.add(layers.Conv2D(32, (3,3), activation='relu', input_shape=(32,32,3)))
model.add(layers.MaxPooling2D((2,2)))
model.add(layers.Conv2D(64, (3,3), activation='relu'))
model.add(layers.MaxPooling2D(2,2))
model.add(layers.Conv2D(64, (3,3), activation='relu'))
model.add(layers.MaxPooling2D(2,2))
model.add(layers.Flatten())
model.add(layers.Dense(64, activation="relu"))
model.add(layers.Dense(10, activation="softmax"))

model.compile(optimizer='adam', loss="sparse_categorical_crossentropy",metrics=['accuracy'])

model.fit(training_images, trainig_labels, epochs=10, validation_data=(testing_images, testing_labels))

img_path = os.path.join(os.path.dirname(__file__), 'galaxy.jpg')
img = cv.imread(img_path)
img = cv.resize(img, (32,32))
img = cv.cvtColor(img, cv.COLOR_RGB2BGR)

prediction = model.predict(np.array([img]) / 255)
index = np.argmax(prediction)
print(f"prediction is {class_names[index]}")
plt.imshow(img)
plt.show()