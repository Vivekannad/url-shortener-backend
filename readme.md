# URL Shortener

A simple URL shortener application built with Node.js, Express, MongoDB, and EJS. This application allows users to shorten URLs, track their usage, and manage access based on user roles.

## Features

- **User Authentication**: Sign up and log in functionality with role-based access control.
- **URL Shortening**: Generate short URLs for long links.
- **Analytics**: Track the number of clicks and visit history for each shortened URL.
- **Role-Based Access**:
  - **NORMAL** users can create and view their own shortened URLs.
  - **ADMIN** users can view all shortened URLs.
- **Responsive Views**: EJS templates for signup, login, and home pages.

## Project Structure

This folder structure is organized into different modules:
- **controllers**: Contains the logic for handling requests and responses.
- **db**: Contains the database connection setup.
- **middleware**: Holds the middleware for processing requests.
- **models**: Defines the schema and structure of the database.
- **routes**: Contains the route definitions for different endpoints.
- **service**: Implements business logic, such as authentication.
- **views**: EJS files that render the frontend views.

Feel free to modify or expand the structure to suit your needs.

### Key Files

- **`index.js`**: Entry point of the application.
- **`db/connect.js`**: MongoDB connection logic.
- **`models/`**: Mongoose schemas for `users` and `url`.
- **`routes/`**: Express routes for handling user, URL, and static requests.
- **`controller/`**: Business logic for handling requests.
- **`middleware/users.js`**: Middleware for authentication and role-based access control.
- **`views/`**: EJS templates for rendering the frontend.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
    ```

2. run the following command: 
    ```
    npm install
    ```

3. Create a .env file in the root directory and add the       following:
    ```
    CONNECTION_STRING=your_mongodb_connection_string
    SECRET_KEY=your_secret_key
    ```

4. Start the Server:
    ```
    npm run dev
    ```

5. Open your browser and navigate to
    http://localhost:4999


## Usage
1. Sign Up: Navigate to /signup to create a new account.
2. Log In: Navigate to /login to log in with your credentials.
3. Shorten URL: Use the form on the home page to generate a short URL.
4. View Analytics: Access /url/analytics/:shortId to view click history for a specific URL.

## Coder
Developed By <b>Vivek Anand</b>.