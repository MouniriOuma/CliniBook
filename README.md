# Project Title

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Backend Overview](#backend-overview)
- [Frontend Overview](#frontend-overview)
- [Project Architecture](#project-architecture)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project is a full-stack application designed with two interfaces: one for the user and one for the admin. The backend handles all data management, authentication, and business logic, while the frontend offers an interactive and user-friendly UI for managing data and interacting with the system.

The project is built with best practices in mind, including error handling, secure authentication, and role-based access control. It is designed to be scalable and maintainable, with a focus on clean architecture and modularity.

## Features
- **User and Admin Interfaces:** Separate interfaces for general users and admin users.
- **Authentication:** JWT-based authentication system to secure user data and restrict access to resources.
- **Role-Based Access Control:** Middleware ensures only authorized users can access admin-specific features.
- **CRUD Operations:** Complete functionality for managing centers, timeslots, and appointments.
- **Form Validation:** All forms are validated using the Yup library, ensuring data integrity.
- **Innovative UI Design:** Focus on delivering an engaging and unique user experience.

## Technologies Used

### Backend:
- **Node.js & Express:** Backend framework for building the server and REST API.
- **JWT (JSON Web Token):** Used for secure authentication and authorization.
- **Middleware:** For authentication and role-based access control.
- **Validators:** Ensures the correctness of data.
- **Database:** MongoDB.

### Frontend:
- **React Native:** Used for building the mobile app.
- **React Navigation:** Combines bottom tab navigation and stack navigation for smooth user flow.
- **Axios:** For making HTTP requests to the backend.
- **AsyncStorage:** For local storage of authentication tokens and user data.
- **Yup:** Library for form validation.

## Backend Overview

### API Endpoints

#### Centers API
- `GET /centers` - Get all centers
- `GET /centers/:id` - Get a specific center
- `POST /centers` - Create a new center
- `DELETE /centers/:id` - Delete a center
- `PATCH /centers/:id` - Update a center

#### Timeslots API
- `GET /timeslots` - Get all timeslots
- `GET /timeslots/:id` - Get a specific timeslot
- `POST /timeslots` - Create a new timeslot
- `DELETE /timeslots/:id` - Delete a timeslot
- `PATCH /timeslots/:id` - Update a timeslot

#### Appointments API
- `GET /appointments` - Get all appointments
- `GET /appointments/:id` - Get a specific appointment
- `POST /appointments` - Create a new appointment
- `DELETE /appointments/:id` - Delete an appointment
- `PATCH /appointments/:id` - Update an appointment

### Middleware
- **Authentication Middleware:** Validates the JWT to ensure the user is authenticated.
- **Role-Based Middleware:** Ensures only authorized users can access admin routes.

### Services
- **CenterService:** Fetches, updates, and manages center data.
- **TimeslotService:** Handles timeslot-related operations.
- **AppointmentService:** Manages appointment-related functionality.

### Security
- **JWT Token:** Required for all transactions to ensure security and proper user authentication.

## Frontend Overview

### User Interface
The UI is designed to offer a clean, easy-to-use experience for both users and admins:
- **User Dashboard:** View and book centers and timeslots.
- **Admin Dashboard:** Manage centers, timeslots, and appointments.

### Frontend Logic
- **Axios:** Handles HTTP requests between the frontend and backend.
- **AsyncStorage:** Securely stores user data locally.
- **Form Validation:** Ensures proper data entry using Yup.
- **Navigation:** Combines stack and tab navigation for a smooth user experience.

### Error Handling
Error handling is implemented throughout the app using `try...catch` to prevent crashes and provide a stable experience.

## Project Architecture

/project-root

│

├── /backend        # Node.js/Express server

│   ├── /controllers    # Handles the logic for API requests

│   ├── /models         # Database models (Centers, Timeslots, Appointments)

│   ├── /middlewares    # Authentication, Role Middleware

│   ├── /routes         # API Endpoints (Centers, Timeslots, Appointments)

│   └── /services       # Business logic for interacting with data

│

├── /frontend       # React Native app

│   ├── /components     # Reusable UI components

│   ├── /screens        # App screens (Login, Dashboard, Admin, etc.)

│   ├── /services       # Axios-based services for API communication

│   └── /navigation     # Navigation setup (Tab Navigator, Stack Navigator)


## Installation and Setup

### Backend Setup
1. Clone the repository.
2. Navigate to the `backend` directory.
3. Run `npm install` to install the dependencies.
4. Set up your environment variables (JWT secret, database connection, etc.).
5. Start the backend server with `npm start`.

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Run `npm install` to install the dependencies.
3. Ensure the backend server is running.
4. Start the React Native app with `expo start` or another development environment.

## Usage
- **User Interface:** Allows users to browse centers and available timeslots and book appointments.
- **Admin Interface:** Admins can create, update, and delete centers, timeslots, and appointments.

## Future Improvements
- **UI Enhancements:** Improve the design with additional elements and animations.
- **Unit Testing:** Add tests to cover both frontend and backend functionalities.
- **Additional Features:** Notifications and appointment reminders.

## Feedback and Contributions
Your feedback is invaluable to me! If you have any suggestions, feature requests, or encounter any issues while using CliniBook, please feel free to reach out to me.

## Contact Information
For more information or inquiries, please contact OUMAIMA MOUNIRI at mouniri.ouma@gmail.com
