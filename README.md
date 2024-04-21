# Table of Contents
1. Features
2. Technologies Used
3. Getting Started
   1. Prerequisites
   2. Installation
   3. Setting Up Environment Variables
   4. Starting the Server
4. Contributing
5. License

   
# Features
User Authentication: Secure authentication system using JSON Web Tokens (JWT) and bcrypt for password hashing.
Real-time Messaging: Utilizes Socket.IO for instant messaging and notifications, enabling real-time communication between clients.
Message Storage: MongoDB with Mongoose ORM for persistent storage of chat messages and user data.
File Uploads: Multer library integration for handling file uploads, such as profile pictures or attachments in chats.
Environment Variables: Configuration management using dotenv for handling environment variables.
API Endpoints: RESTful API endpoints built with Express.js for user management, message handling, and group chats.
# Technologies Used
Node.js: Server-side JavaScript runtime for building scalable network applications.
Express.js: Web application framework for Node.js, providing a robust set of features for building APIs.
MongoDB: NoSQL database for storing user data, chat messages, and application-related information.
Mongoose: MongoDB object modeling tool for Node.js, providing a schema-based solution for data modeling.
JWT (JSON Web Tokens): Token-based authentication mechanism for secure user authentication and authorization.
Multer: Node.js middleware for handling multipart/form-data, used for file uploads.
Socket.IO: Library for real-time web applications, facilitating bidirectional communication between clients and servers.
bcrypt: Library for hashing passwords, enhancing security for user authentication.
dotenv: Zero-dependency module for loading environment variables from a .env file into process.env.
# Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

# Prerequisites
Ensure you have Node.js and npm (Node Package Manager) installed on your machine.

# Installation
  Clone the repository:
  git clone https://github.com/shivam150/Real_Time_chat_app_backend.git
  Navigate to the project directory:
  cd real_time_chat_app_backend
# Install dependencies:
  npm install
# Setting Up Environment Variables
 Create a .env file in the root directory of the project.
 Add the following environment variables to the .env file:
   PORT=3000
   MONGODB_URI=your_mongodb_connection_uri
   JWT_SECRET=your_jwt_secret_key
  Replace your_mongodb_connection_uri with your MongoDB connection URI and your_jwt_secret_key with a secret key for JWT token generation.
# Start the development server using the following command:
   npm start
The server will start running on the specified port (default is 3000) and can be accessed via HTTP requests.

# Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the contribution guidelines and adhere to the code of conduct.

# Test_APIs
<!-- test api on postmen -->
To test API endpoints locally, use an app like Postman or Insomnia. 
You'll need to send HTTP requests to localhost at the appropriate route
and port (default is 9001).

# License
This project is licensed under the MIT License, which means you are free to use, modify, and distribute the code as long as you include the original license and copyright notice.
