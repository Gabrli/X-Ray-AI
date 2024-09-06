import cv2 as cv
import matplotlib.pyplot as plt
import numpy as np
from tensorflow.keras import layers, models, regularizers
from tensorflow.keras.callbacks import EarlyStopping
import os

class_names = []
training_images = []
training_labels = []
testing_images = []
testing_labels = []

path_to_main_dataset_folder = os.path.join(os.path.dirname(__file__), './dataset')
for main_folder in os.listdir(path_to_main_dataset_folder):
    class_names.append(main_folder)
    
    
    path_to_sub_folders = os.path.join(path_to_main_dataset_folder, main_folder)
    for folder in os.listdir(path_to_sub_folders):
       
        if folder == 'Train':
            path_to_train_files = os.path.join(path_to_sub_folders, folder)
            
            for files in os.listdir(path_to_train_files):
                
                file_path = os.path.join(path_to_train_files, files)
                img = cv.imread(file_path)
                img = cv.resize(img, (32,32))
                img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
                training_images.append(img)
                training_labels.append(class_names.index(main_folder))
        path_to_test_files = os.path.join(path_to_sub_folders, folder)
        for files in os.listdir(path_to_test_files):
            file_path = os.path.join(path_to_test_files, files)
            img = cv.imread(file_path)
            img = cv.resize(img, (32,32))
            img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
            testing_images.append(img)
            testing_labels.append(class_names.index(main_folder))

            


training_images = np.array(training_images)
training_images = training_images / 255
training_labels = np.array(training_labels)

testing_images = np.array(testing_images)
testing_images = testing_images / 255
testing_labels = np.array(testing_labels)

print(f"THIS IS TRAINING IMAGES LENGHT: {len(training_images)}")
print(f"THIS IS TESNING IMG LENGHT: {len(testing_images)}")
num_classes = len(class_names)



model = models.Sequential()
model.add(layers.Conv2D(32, (3,3), activation='relu', input_shape=(32,32,3), kernel_regularizer=regularizers.l2(0.00001)))
model.add(layers.BatchNormalization())
model.add(layers.MaxPooling2D())
model.add(layers.Conv2D(64, (3,3), activation='relu', padding="same",  kernel_regularizer=regularizers.l2(0.00001)))
model.add(layers.Dropout(0.5))
model.add(layers.BatchNormalization())
model.add(layers.MaxPooling2D((2,2)))
model.add(layers.Conv2D(128, (5,5), activation='relu', padding="same",  kernel_regularizer=regularizers.l2(0.00001)))
model.add(layers.Dropout(0.5))
model.add(layers.BatchNormalization())
model.add(layers.MaxPooling2D((2,2)))
model.add(layers.Conv2D(256, (3,3), activation='relu', padding="same",  kernel_regularizer=regularizers.l2(0.00001)))
model.add(layers.Dropout(0.5))
model.add(layers.BatchNormalization())
model.add(layers.MaxPooling2D((2,2)))

model.add(layers.Flatten())
model.add(layers.Dense(1024,  activation='relu', kernel_regularizer=regularizers.l2(0.00001)))

model.add(layers.Dense(num_classes, activation="softmax", kernel_regularizer=regularizers.l2(0.00001)))

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
#early_stopping = EarlyStopping(monitor='val_loss', patience=1, restore_best_weights=True)

model.fit(training_images, training_labels, epochs=40,  validation_data=(testing_images, testing_labels), )

user_img_path = os.path.join(os.path.dirname(__file__), 'impacted.jpg')
user_img = cv.imread(user_img_path)
user_img = cv.resize(user_img, (32,32))
user_img = cv.cvtColor(user_img, cv.COLOR_BGR2RGB)
user_img = user_img / 255

user_img = np.expand_dims(user_img, axis=0)

prediction = model.predict(user_img)
prediction_class = np.argmax(prediction)
print(f"class name is: {class_names[prediction_class]}")