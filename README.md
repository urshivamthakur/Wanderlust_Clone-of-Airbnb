# Wanderlust - AirBnb Clone Project

A full-stack web application that replicates core features of Airbnb, built with Node.js, Express, and MongoDB. Features interactive maps, image upload capabilities, and a robust user authentication system.

## Features

- User Authentication (Signup/Login/Logout)
- Listing Management (Create, Read, Update, Delete)
- Review System
- Multiple Image Upload with Cloudinary
- Interactive Maps with Mapbox Integration
- Flash Messages for User Feedback
- Responsive Design
- Error Handling
- Session Management with MongoDB Store
- MVC Architecture

## Tech Stack

- **Frontend:**
  - EJS (Embedded JavaScript Templates)
  - Bootstrap 5
  - Custom CSS
  - JavaScript
  - Mapbox GL JS

- **Backend:**
  - Node.js (v23.11.0)
  - Express.js
  - MongoDB
  - Passport.js (Authentication)
  - Cloudinary (Image Management)
  - Mapbox (Location Services)

## Project Structure

```
├── app.js                 # Main application file
├── cloudConfig.js         # Cloudinary configuration
├── middleware.js          # Custom middleware functions
├── schema.js             # Data validation schemas
├── controllers/          # MVC Controllers
│   ├── home.js          # Home controller
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── init/                 # Initialization scripts
│   ├── data.js          # Seed data
│   └── index.js         # Database initialization
├── models/              # Database models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/              # Route handlers
│   ├── home.js          # Home routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/               # EJS templates
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── includes/
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── listings/
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   ├── users/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   └── error.ejs
├── public/              # Static files
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│       ├── map.js
│       └── script.js
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

3. **Environment Variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAPBOX_TOKEN=your_mapbox_token
   SECRET=your_session_secret
   ```

4. **Start MongoDB**
   - Start your MongoDB server locally
   - Make sure MongoDB is running on `mongodb://127.0.0.1:27017/wanderlust`

5. **Start the Application**
   ```bash
   # Run the development server
   nodemon app.js
   ```

   The application will be available at `http://localhost:8080`

## Additional Features

- **Image Upload:** Multiple image upload support with Cloudinary integration
- **Location Services:** Interactive maps and location search powered by Mapbox
- **Session Management:** Persistent sessions using MongoDB store
- **Flash Messages:** Immediate user feedback for actions
- **Error Handling:** Custom error handling middleware for better user experience

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
  - POST /listings/:id/reviews - Create a review for a listing
  - DELETE /listings/:id/reviews/:reviewId - Delete a review

## Contributing

Feel free to submit issues and enhancement requests.
