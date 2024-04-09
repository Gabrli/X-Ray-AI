import cv2 as cv
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras import datasets, layers, models
from keras.layers import TFSMLayer
import os 


print(os.path.isfile('./moon.jpg'))

(trainig_images, trainig_labels), (testing_images, testing_labels) = datasets.cifar10.load_data()
trainig_images, testing_images = trainig_images / 255, testing_images / 255

class_names = ['Planets', 'Asteroids', 'Satellite', 'Star', 'Moons', 'Supernova', 'Comet', 'Black hole', 'Galaxy', 'Nebula' ]

for i in range(16):
    plt.subplot(4,4, i+1)
    plt.xticks([])
    plt.yticks([])
    plt.imshow(trainig_images[i], cmap=plt.cm.binary)
    plt.xlabel(class_names[trainig_labels[i][0]])
plt.show()

trainig_images = trainig_images[:20000]
trainig_labels = trainig_labels[:20000]
testing_images = testing_images[:4000]
testing_labels = testing_labels[:4000]

model = models.Sequential()

model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.Flatten())
model.add(layers.Dense(64, activation='relu'))
model.add(layers.Dense(10, activation='softmax'))
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.fit(trainig_images, trainig_labels, epochs=10, validation_data=(testing_images, testing_labels))


#img = cv.imread(str(os.path.isfile('moon.jpg')))
#img = cv.cvtColor(img, cv.COLOR_BGR2RGB)


#plt.imshow(img, cmap=plt.cm.binary)


#prediction = model.predict(np.array([img]) / 255 )
#index = np.argmax(prediction)
#print(f'Prediction is: {class_names[index]}')