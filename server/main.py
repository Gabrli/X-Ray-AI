import cv2 as cv
import numpy as np
from tensorflow.keras import layers, models
from tensorflow.keras.callbacks import EarlyStopping
from sklearn.model_selection import train_test_split
import os

class_names = []
training_images = []
training_labels = []
testing_images = []
testing_labels = []

path_to_dataset = os.path.join(os.path.dirname(__file__), 'dataset')
for class_folder in os.listdir(path_to_dataset):
    class_folder_path = os.path.join(path_to_dataset, class_folder)
    if not os.path.isdir(class_folder_path):
        continue
    class_names.append(class_folder)
    train_folder_path = os.path.join(class_folder_path, 'Train')
    test_folder_path = os.path.join(class_folder_path, 'Test')


    for img_name in os.listdir(train_folder_path):
        img_path = os.path.join(train_folder_path, img_name)
        img = cv.imread(img_path)
        img = cv.resize(img, (32,32))
        img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
        training_images.append(img)
        training_labels.append(class_names.index(class_folder))

    for img_name in os.listdir(test_folder_path):
        img_path = os.path.join(test_folder_path, img_name)
        img = cv.imread(img_path)
        img = cv.resize(img, (32,32))
        img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
        testing_images.append(img)
        testing_labels.append(class_names.index(class_folder))

images = np.concatenate([training_images, testing_images])
labels = np.concatenate([training_labels, testing_labels])


train_images, test_images, train_labels, test_labels = train_test_split(images, labels)

train_images = np.array(train_images) / 255.0
train_labels = np.array(train_labels)

test_images = np.array(test_images) / 255.0
test_labels = np.array(test_labels)


print(f"liczba obrazów treningowych {len(train_images)}")
print(f"liczba obrazów testowych {len(test_images)}")

num_classes = len(class_names)


model = models.Sequential()
model.add(layers.Conv2D(32, (3,3), activation='relu', input_shape=(32,32,3)))
model.add(layers.RandomFlip("horizontal"))  # Augmentacja - odbicie poziome
model.add(layers.RandomRotation(0.2))        # Augmentacja - rotacja
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
model.add(layers.Dense(128,  activation='relu'))
model.add(layers.Dense(num_classes, activation="softmax"))
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
early_stopping = EarlyStopping(monitor='val_loss', patience=3, restore_best_weights=True)

model.fit(train_images, train_labels, epochs=500, validation_data=(test_images, test_labels) )

model.save('my_model.keras')

# user_img_path = os.path.join(os.path.dirname(__file__), 'obli.jpg')
# user_img = cv.imread(user_img_path)
# user_img = cv.resize(user_img, (32,32))
# user_img = cv.cvtColor(user_img, cv.COLOR_BGR2RGB)
# user_img = user_img / 255.0

# user_img = np.expand_dims(user_img, axis=0)

# prediction = model.predict(user_img)
# prediction_class = np.argmax(prediction)
# print(f"class name is: {class_names[prediction_class]}")