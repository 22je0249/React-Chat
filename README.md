# React-Chat
Web Chat Application with Firebase and React
Overview
The Web Chat Application is a real-time messaging platform built using React for the front end and Firebase for the back end. This application allows users to create accounts, log in, and engage in real-time conversations with others. The application leverages Firebase Authentication for secure user authentication and Firestore for storing and retrieving chat messages.

Key Features
User Authentication:

Sign Up: Users can create an account using their email and password.
Log In: Existing users can log in securely.
Log Out: Users can log out of their accounts.
Real-time Messaging:

Send Messages: Users can send text messages to each other in real-time.
Receive Messages: Messages are received in real-time without the need for page refresh.
Chat Rooms: Users can join different chat rooms to have conversations.
Firestore Database:

Message Storage: All messages are stored in Firestore, ensuring persistence and reliability.
User Data: User profiles and chat histories are maintained in Firestore.
Responsive Design:

The application is designed to be fully responsive, ensuring a seamless experience on both desktop and mobile devices.
Security:

Firebase Authentication ensures secure login and user data protection.
Firestore security rules are implemented to control access to data.
Technologies Used
React:

Front-end library for building user interfaces.
React hooks (useState, useEffect) for managing component state and side effects.
Firebase:

Firebase Authentication: For user authentication (sign up, log in, log out).
Firestore: For real-time database functionalities, storing user profiles, and chat messages.
Firebase Hosting: Optional, for deploying the web application.
Additional Libraries:

React Router: For navigation and routing between different pages (e.g., login, chat rooms).
Material-UI: For a sleek and modern user interface.
