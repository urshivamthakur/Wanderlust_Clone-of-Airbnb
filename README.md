# AirBnb Clone Project

A full-stack web application that replicates core features of Airbnb, built with Node.js, Express, and MongoDB.

## Features

- User Authentication (Signup/Login/Logout)
- Listing Management (Create, Read, Update, Delete)
- Review System
- Image Upload
- Flash Messages for User Feedback
- Responsive Design
- Error Handling

## Tech Stack

- **Frontend:**
  - EJS (Embedded JavaScript Templates)
  - Bootstrap
  - Custom CSS
  - JavaScript

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Passport.js (Authentication)

## Project Structure

```
├── app.js                 # Main application file
├── middleware.js          # Custom middleware functions
├── schema.js             # Data validation schemas
├── models/               # Database models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/               # Route handlers
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/               # EJS templates
│   ├── layouts/
│   ├── includes/
│   ├── listings/
│   └── users/
├── public/              # Static files
│   ├── css/
│   └── js/
└── utils/              # Utility functions
    ├── ExpressError.js
    └── wrapAsync.js
```

## Setup Instructions

1. **Prerequisites**
   - Node.js
   - MongoDB
   - npm or yarn

2. **Installation**
   ```bash
   # Clone the repository
   git clone <repository-url>

   # Install dependencies
   npm install
   ```

3. **Start MongoDB**
   - Start your MongoDB server locally
   - Make sure MongoDB is running before starting the application

4. **Start the Application**
   ```bash
   # Run the development server
   nodemon app.js
   ```

   The application will be available at `http://localhost:8080`

## Available Routes

- **Auth Routes:**
  - GET /signup - Signup page
  - POST /signup - Create new user
  - GET /login - Login page
  - POST /login - Authenticate user
  - GET /logout - Logout user

- **Listing Routes:**
  - GET /listings - View all listings
  - GET /listings/new - Create new listing form
  - POST /listings - Create new listing
  - GET /listings/:id - View specific listing
  - GET /listings/:id/edit - Edit listing form
  - PUT /listings/:id - Update listing
  - DELETE /listings/:id - Delete listing

- **Review Routes:**
  - POST /listings/:id/reviews - Create review
  - DELETE /listings/:id/reviews/:reviewId - Delete review

## Contributing

Feel free to submit issues and enhancement requests.
