# Frontend – Movie Search Form React

## Project Description

This project is a React-based frontend application that provides a user interface for searching movies or TV series.

The application contains a form where users can enter search filters such as:
- Movie title
- Release year
- Type (movie or series)
- Genre
- User name

When the form is submitted, the frontend sends the data to a backend REST API built with Spring Boot. The backend processes the request, retrieves movie information, and sends a response back to the frontend. The result is then displayed on the interface in a movie card.

This project demonstrates the communication between a React frontend and a Spring Boot backend using HTTP requests.

---

## How to Run the Frontend

Follow these steps to run the React application locally.

### 1. Install the project dependencies

npm install

### 3. Start the development server

npm start

or (depending on the configuration):

npm run dev

### 4. Open the application in your browser


---

## Important Note

Make sure the **Spring Boot backend server is running** before using the application.

The frontend communicates with the backend at this repository:
---
https://github.com/delsa21/formulario_back_end.git
---
If the backend server is not running, the movie search functionality will not work.
