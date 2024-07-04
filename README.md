# Residence Realm

This website is dedicated to real estate, focusing on residential properties such as single-family homes, townhouses, apartments, student housing, senior living communities, vacation rentals, etc.

## Core Features

- **Navbar**: 
  - Displays the website name, Home, Update Profile, and User Profile.
  - User profile picture and logout button appear if logged in; otherwise, a login button is shown.
  - Hovering over the user profile picture shows the user's name.
  - Clicking the logout button logs out the user.

- **Login Page**:
  - Email and password-based authentication.
  - Social logins (Google, GitHub/Facebook/Twitter - implement one).
  - Link to the Register page.

- **Register Page**:
  - Fields: Name, Email, photoURL, Password.
  - Password requirements: Uppercase letter, Lowercase letter, minimum 6 characters.
  - Shows error/toast if requirements are not met.
  - Link to the Login page.
  - Displays toast/sweet alert upon successful login or registration.

- **Banner**:
  - Includes a slider.

- **Footer**:
  - Displays all relevant information with an eye-catching design.
  - Navbar and Footer are shown on all pages.

- **Estate Details**:
  - Clicking “View Property” takes the user to the Estate Details page.
  - Protected route: Redirects to the login page if the user is not logged in.

- **404 Page**:
  - Custom 404/not found page.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Deployment**: Firebase

## Live Site

Check out the live site: [Residence Realm](https://react-residence-realm.web.app/)

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Abdullah-Az-Zahur/real-estate-website.git
