# CineStream

CineStream is a web application for streaming movies. Users can browse a collection of movies, view trailers, get personalized movie suggestions, create and share movie lists, and more.

## Features

- **Authentication**: Users can sign up and log in securely using Firebase authentication.
- **Browse Page**: Users can browse a collection of movies after authentication.
- **Main Movie**: A featured movie is displayed prominently on the browse page.
- **Trailer in Background**: Movie trailers play in the background for an immersive browsing experience.
- **Movie Suggestions**: Users receive personalized movie suggestions based on their preferences.
- **Movie Lists**: Users can create and manage custom lists of movies.
- **NetflixGPT Integration**: Utilizes NetflixGPT for enhanced movie recommendations.
- **Search Bar**: Users can search for specific movies.
- **Responsive Design**: Designed with responsiveness in mind for optimal viewing on various devices.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Redux**: State management library for managing application state.
- **Firebase**: Authentication service for user authentication and authorization.

## Installation

1. Clone the repository:
    ```
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```
    cd CineStream
    ```

3. Install dependencies:
    ```
    npm install
    ```

4. Create a Firebase project and configure authentication.

5. Create a `.env` file in the root directory and add Firebase configuration:
    ```
    REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
    REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
    REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
    REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
    REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
    ```

6. Start the development server:
    ```
    npm start
    ```

7. Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
