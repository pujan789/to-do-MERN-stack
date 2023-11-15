# to-do-MERN-stack
Last to-do list was created only with Express, Node and some HTML and CSS. But this time it is entire MERN stack project with react and mongoDB.


```markdown
# Todo App

This is a simple Todo application built with the MERN (MongoDB, Express, React, Node.js) stack.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- View all todos
- Add new todos
- Mark todos as complete
- Delete todos
- Filter todos by All, Active, and Complete

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB installed and running locally.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

3. Install dependencies for both the server and client:

   ```bash
   cd server
   npm install

   cd ../client
   npm install
   ```

4. Create a `.env` file in the `server` directory with the following content:

   ```env
   MONGODB_URI=mongodb://localhost:27017/mern-todo
   ```

   Adjust the MongoDB URI as needed.

5. Start the server and client:

   ```bash
   cd ../server
   npm start

   cd ../client
   npm start
   ```

   The server runs on http://localhost:3001, and the React app runs on http://localhost:3000.

## Usage

- Visit http://localhost:3000 in your web browser to use the Todo application.

## API Endpoints

- GET `/todos`: Get all todos
- POST `/todo/new`: Create a new todo
- DELETE `/todo/delete/:id`: Delete a todo by ID
- PATCH `/todo/complete/:id`: Toggle the completion status of a todo by ID

