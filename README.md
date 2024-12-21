# Project: Full stack intern Assignment

## Description

This project is a full-stack web application developed using ReactJS and Material-UI (MUI) for the frontend and Express.js with MongoDB for the backend. The application integrates environment variables for secure configuration and is designed to be deployed on Vercel for seamless access.

## Features

### Frontend:

- Built with ReactJS and styled using Material-UI (MUI).

- Responsive and user-friendly interface.

- Dynamic interaction with the backend API.

- Utilizes environment variables for secure API route and AI integration.

### Backend:

- Developed with Express.js.

- Uses MongoDB as the database for storing and retrieving data.

- Secured connection using environment variables.

## Environment Variables

### Frontend

- The .env file in the frontend contains the following variables:

- REACT_APP_API_ROUTE: The base URL for the backend API.

- REACT_APP_AI_KEY: The API key for integrating AI features.

### Backend

- The .env file in the backend contains the following variable:

- MONGODB_CONNECTION_STR: The connection string for connecting to the MongoDB database.

## Deployment

The project is deployed on Vercel for both frontend and backend. The live link to the application is:
Live Link

Installation and Setup

## Prerequisites

- Node.js

- npm or yarn

- MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)

---
## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/hemantsoni23/FS_intern_assignment.git
   cd FS_intern_assignment
    ```
2. Install client dependencies:
   ```bash
   cd client
   npm install
   ```
3. Install server dependencies:
   ```bash
   cd ..
   cd server
   npm install
   ```
---

### Frontend Setup

Create a .env file in the client directory with the following content:
```bash
REACT_APP_API_ROUTE=your-backend-api-route
REACT_APP_AI_KEY=your-ai-api-key
```

Start the frontend:
```bash
npm start
```

### Backend Setup 

Create a .env file in the server directory with the following content:
```bash
MONGODB_CONNECTION_STR=your-mongodb-connection-string
```

Start the frontend:
```bash
node index.js
```

## Deployment Instructions

- Ensure both frontend and backend are functional locally.

- Deploy the backend on Vercel or any other hosting service and update the REACT_APP_API_ROUTE in the frontend .env file.

- Deploy the frontend on Vercel.

- Test the live link to ensure all features are operational.
