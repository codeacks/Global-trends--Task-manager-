# Task Management Application

A full-stack Task Management Web Application built with the MERN stack (MongoDB, Express, React, Node.js).
This project demonstrates CRUD operations, RESTful API design, and a responsive frontend with a modern UI.

## Features

- **Create Task**: Add new tasks with title, description, and status.
- **Read Tasks**: View all tasks in a responsive list/grid layout.
- **Update Task**: Edit task details and update status (Pending, In Progress, Completed).
- **Delete Task**: Remove tasks permanently.
- **Status Badges**: Visual indicators for task status.
- **Responsive Design**: Works on desktop and mobile.

## Tech Stack

- **Frontend**: React (Vite), CSS Modules/Variables, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Tooling**: Concurrently (for running both servers), Nodemon

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (Local instance running on port 27017 or Cloud URI)

## Setup & Installation

1.  **Clone the repository** (or navigate to the project folder):

    ```bash
    cd task-manager-app
    ```

2.  **Install Dependencies**:
    
    This command installs dependencies for the root, server, and client.
    
    ```bash
    npm run install-all
    ```
    
    *Alternatively:*
    ```bash
    npm install
    cd server && npm install
    cd ../client && npm install
    ```

3.  **Environment Setup**:
    
    The server comes with a default `.env` configuration.
    
    **File:** `server/.env`
    ```env
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskmanager
    PORT=5000
    ```
    *Replace `<username>` and `<password>` with your actual MongoDB Atlas credentials.*

## Running the Application

To run both the Frontend (Client) and Backend (Server) simultaneously:

```bash
npm start
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## API Endpoints

| Method | Endpoint | Description |
|:---|:---|:---|
| GET | `/api/tasks` | Fetch all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Folder Structure

```
/client          # React Frontend
  /src
    /components  # Reusable UI components
    /styles      # One-off styles
    App.jsx      # Main Application Logic
/server          # Express Backend
  /controllers   # Route Logic
  /models        # Mongoose Schema
  /routes        # API Routes
  server.js      # Entry Point
```
