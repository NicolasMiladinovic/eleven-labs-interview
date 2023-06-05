# Eleven-labs Interview test - CRUD Application
***
This repository contains a CRUD (Create, Read, Update, Delete) application as part of the Eleven-labs Interview test.

## 🤖 Installation
To install this application, follow these steps:

1. Clone this repository to your local machine using https://github.com/NicolasMiladinovic/eleven-labs-interview/
2. Navigate to the root directory of the cloned repository.

### 🐳 With Docker
If you have a Docker environment, you can simply run the following command to start the application:

`docker-compose up`
This command will start the application and its dependencies in separate containers.

### ✍️ Without Docker
If you don't have a Docker environment, you can start the application manually by following these steps:

Navigate to the *./Backend* directory and run `npm install`.
Run `npm start` to start the backend server.
Navigate to the *./Frontend* directory and run `npm install`.
Run `npm start` to start the frontend server.

**Then go to *http://localhost:3000/***

## 🎯 Objectives
This application allows you to perform CRUD operations on a database of items. You can create a new astronaut, read existing astronauts, update existing astronaut, and delete existing astronaut.

## 📎 Stack
This application was built using the following technologies:

**☀️ Frontend :**
* React
* Axios
* Material UI

**⛅️ Backend :**
* Node.js
* Express.js
* SQLite3