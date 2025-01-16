# Interview Taiyari 
Welcome to the *Interview Taiyari*, a user-friendly web application designed to share and learn from interview experiences. This platform enables individuals to prepare effectively for interviews by accessing insights from a supportive community.

## 🚀 Demo Vedio

Experience the platform in action: [Live Demo]()

---
## 🌟 Features

- 🔒 *User Authentication*
  - Secure login and registration system
  - JWT-based authentication for enhanced security
  
- 📝 *Interview Experience Sharing*
  - Submit detailed interview experiences
  - Share specific questions encountered
  
- 🔍 *Experience Management*
  - Comprehensive dashboard for browsing all submissions
  - Personal submission management with edit and delete capabilities
  - Easy-to-use interface for maintaining your content

- 📊 *Interactive Dashboard*
  - Clear visualization of interview experiences
  - User-friendly navigation and search
  - Organized display of community submissions

## 🛠️ Tech Stack

- *Frontend*: React.js with Material-UI
- *Backend*: Node.js and Express.js
- *Database*: MongoDB
- *Authentication*: JSON Web Tokens (JWT)

## ⚙️ Installation and Setup

### Prerequisites

- Node.js (v14 or later)
- MongoDB (Cloud or Local Instance)
- Git

### Installation Steps

1. *Clone the Repository*
   bash
   git clone https://github.com/your-username/interview-platform.git
   cd interview-platform
   

2. *Backend Setup*
   bash
   cd backend
   npm install
   

   Create a .env file with the following configuration:
   env
   PORT=8080
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   

   Start the backend server:
   bash
   npm start
   

3. *Frontend Setup*
   bash
   cd ../frontend
   npm install
   npm start
   

4. *Access the Application*
   - Open your browser and navigate to http://localhost:3000

## 📖 Usage Guide

### 1. Account Management
- Register a new account or log in to existing one
- Secure authentication using JWT
- 
### 2. Sharing Interview Experiences
- Create detailed submissions about your interviews
- Include company information and questions asked

### 3. Exploring Submissions
- Browse through the comprehensive dashboard
- View detailed interview experiences
- Search functionality companywise

### 4. Managing Your Content
- Edit your submitted experiences
- Remove outdated content

## 🔗 API Documentation

### Authentication Endpoints

POST /api/users/register  - Register new user
POST /api/users/login     - User login


### Submission Endpoints

GET    /api/submissions       - Retrieve all submissions
GET    /api/submissions/user  - Get user-specific submissions
POST   /api/submissions      - Create new submission
PUT    /api/submissions/:id  - Update existing submission
DELETE /api/submissions/:id  - Remove submission
