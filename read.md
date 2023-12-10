# Express Movie API w/ OPENAI

This project is an Express.js API designed to manage a collection of movies, featuring integration with OpenAI's powerful AI models. It provides endpoints for CRUD operations on movies as well as AI-driven movie recommendations.

## Installation

To run this code, you need to have Node.js and MongoDB installed on your machine. Then, follow these steps:

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. In the project root, create a `.env` file to store your private keys securely.
4. Include your MongoDB connection key and OPENAI API key in the `.env` file.

## `.env` file format:
```javascript
MONGO_CONNECTION_KEY=your_mongodb_connection_key
OPENAI_API_KEY=your_openai_api_key
```
5. Start the server by running `npm start`.


## Usage

Once the server is running, you can use the following endpoints to interact with the API:

- `POST /api/movies`: Add a new movie.
```json
  {
    "movie_name": required <String>,
    "rating": required <Number>, // Must be a number between 1 and 10
    "info": required <String>,
    "description": required <String>
  }
  ```
- `GET /api/movies`: Get all movies.
- `GET /api/movies/:movie_id`: Get a single movie by ID.
- `PATCH /api/movies`: Edit a movie.
 ```json
  {
    "movie_name": "New Movie Title",
    "rating": "New Rating",
    "info": "Updated Information",
    "description": "New Description"
  }
  ```
- `DELETE /api/movies/:movie_id`: Delete a movie.

Additionally, there is an OpenAI endpoint available:

- `GET /api/movies/openai/getRecommendations`: Get movie recommendations using OpenAI.

## Error Handling

The code uses the `express-async-errors` package for handling asynchronous errors. The `errorHandler` middleware is used to handle any errors that occur during the request processing.

## Database Connection

The code connects to MongoDB using the provided `MONGO_CONNECTION_KEY` environment variable. If the connection is successful, it logs a success message; otherwise, it logs a failure message.

## Server

The server listens on port 8000. Once the server is started, it logs a message indicating the server is running.