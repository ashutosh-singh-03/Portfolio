# Portfolio Website

A modern portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- Responsive design
- Modern UI/UX
- Contact form
- Project showcase
- Skills visualization
- About section

## Tech Stack

- Frontend:
  - React.js
  - CSS3 with modern features
  - Font Awesome icons
  
- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend
   npm install
   ```

3. Create a `.env` file in the backend directory with:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```

4. Run the development servers:
   ```bash
   # Run backend (from root directory)
   npm run server
   
   # Run frontend (from frontend directory)
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the website

## Project Structure

```
portfolio/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── About/
│       │   ├── Contact/
│       │   ├── Header/
│       │   ├── Hero/
│       │   ├── Projects/
│       │   └── Skills/
│       ├── App.js
│       └── index.js
├── package.json
└── README.md
```
# Portfolio