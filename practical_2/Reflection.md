# RESTful API Weather Application

## 1. Documentation

### Main Concepts Used

This project demonstrates how to use JavaScript's Fetch API to interact with RESTful APIs, performing the four main HTTP methods—GET, POST, PUT, and DELETE—via a straightforward web interface.

Key concepts applied:

1. RESTful API Operations

- **GET:** Fetches weather data from the OpenWeatherMap API based on the city entered by the user.
- **POST:** Adds a new "location" resource using JSONPlaceholder (as a mock API).
- **PUT:** Updates an existing location by its ID.
- **DELETE:** Deletes a location by its ID.

2. Event-Driven Programming

- JavaScript responds to form submissions and button clicks.
- These events trigger asynchronous functions to make HTTP requests.

3. Fetch API & Promises

- Used for communication with external APIs.
- Supports all HTTP methods and manages asynchronous operations with async/await.

4. DOM Manipulation

- Dynamically updates the page to display API responses.
- Handles tab switching and form processing without reloading the page.

5. UI/UX Design Basics

- Uses tabbed navigation to separate features.
- Simple forms and styled response areas provide user feedback.

## 2. Reflection

### What I Learned

Through this project, I learned how to work with RESTful APIs in JavaScript. Key takeaways include:

1. Understanding REST APIs

- Gained hands-on experience with how HTTP methods (GET, POST, PUT, DELETE) correspond to retrieving, creating, updating, and deleting data.
- Learned how APIs provide endpoints that accept requests and return JSON responses.

2. Using the Fetch API

- Learned to use the fetch() method for sending HTTP requests and handling responses with async/await.
- Practiced setting headers, converting data to and from JSON, and managing errors.

### Challenges Faced (with screenshots) and Solutions

#### Tab UI and DOM Updates

Ensuring smooth tab switching and accurate UI updates required careful DOM manipulation. Small errors could prevent forms from displaying or updating as intended.

**Solution:**  
I implemented a showTab() function to hide all tabs except the selected one. I also made sure all form elements were properly connected to JavaScript event listeners, so the UI would update based on API responses.
