import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt
import os
from keras import layers, models

class_names = ["moon", "star",  "asteroid", "meteroite", "planet", "nebula", "galaxy"]
class_indices = {class_name: i for i, class_name in enumerate(class_names)}

image_path = os.path.join(os.path.dirname(__file__), './datasets')
image_files = os.listdir(image_path)

images = []
labels = []

for filename in os.listdir(image_path):
    if filename.endswith('.jpg'):
        img = cv.imread(os.path.join(image_path, filename))
        img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
        img = cv.resize(img, (32, 32))
        images.append(img)
        label = os.path.splitext(filename)[0]
        labels.append(label)

images = np.array(images)
labels = np.array(labels)

# Mapowanie nazw plików na indeksy klas
label_indices = np.array([class_indices[label] for label in labels])

#plt.figure(figsize=(10, 10))
for i in range(7):
    plt.subplot(4, 4, i + 1)
    plt.xticks([])
    plt.yticks([])
    plt.imshow(images[i], cmap=plt.cm.binary)
    plt.xlabel(class_names[label_indices[i]])
plt.show()


images = images[:7]
label_indices = label_indices[:7]  # Używamy indeksów klas

model = models.Sequential()
model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(128, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Flatten())
model.add(layers.Dense(128, activation='relu'))
model.add(layers.BatchNormalization())  # Warstwa normalizacji wsadowej
model.add(layers.Dropout(0.5))  # Warstwa Dropout do regularyzacji
model.add(layers.Dense(64, activation='relu'))
model.add(layers.Dense(7, activation='softmax'))


model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])



model.fit(images, label_indices, epochs=100, validation_data=(images, label_indices))

img_path = os.path.join(os.path.dirname(__file__), "planet.jpg")
img = cv.imread(img_path)
img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
img = cv.resize(img, (32, 32))

plt.imshow(img, cmap=plt.cm.binary)

prediction = model.predict(np.array([img]) / 255)
index = np.argmax(prediction)
predicted_class_name = class_names[index]
print(f"prediction is {predicted_class_name}")
