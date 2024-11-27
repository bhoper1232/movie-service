# MovieService 🎥
**MovieService** is a full-stack web application. It allows users to browse through a collection of movies, view detailed information about each movie, and share their thoughts by leaving reviews.

## 🛠️ Features
- **Movie Browsing**:  
  The homepage displays a catalog of movies, each represented as a card with a brief overview.
- **Movie Details**:  
  Clicking on a movie card reveals detailed information about the selected movie, including its description, cast, and more.
- **User Reviews**:  
  Users can leave reviews for movies, which are stored and retrieved from a MongoDB database.

## 💻 Tech Stack
### Backend:
- **Java** with **Spring Boot**: RESTful API for handling business logic and data management.
- **MongoDB**: NoSQL database for storing movie reviews.

### Frontend:
- **React**: Dynamic and responsive UI for seamless user experience.

## 🚀 How to Run Locally
### Prerequisites:
- Java JDK 11+
- Node.js & npm
- MongoDB

### Steps:
1. **Clone the Repository**:
   ```
   git clone https://github.com/bhoper1232/movie-service.git
   cd movie-service
   ```
3. **Run the Backend:**
    - Navigate to the backend folder:
      ```
      cd movie-api
      ```
    - Build and run the Spring Boot application:
      ```
      ./mvnw spring-boot:run
      ```
4. **Run the Frontend:**
    - Navigate to the frontend folder:
      ```
      cd ../movie-client
      ```
    - Install dependencies and start the React app:
      ```
      npm install
      npm start
      ``` 
5. **Access the App:**
    - Open your browser and go to `http://localhost:5173`.

## 🖼️ Screenshots

### Homepage:
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/84386bb2-96b1-42b6-9bd8-95bfaa7f848d">


### Movie Details:
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/9f7aedae-43fc-4e9f-b3c6-e247f54e6231">


