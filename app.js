// Error handler package for express
require("express-async-errors")

const express = require("express")
require("dotenv").config()

// controllers...
const addMovie = require("./controllers/addMovie")
const getAllMovies = require("./controllers/getAllMovies")
const getSingleMovie = require("./controllers/getSingleMovie")
const editMovie = require("./controllers/editMovie")
const deleteMovie = require("./controllers/deleteMovie")
const movieRecommendation = require("./controllers/movieRecommendation")

// Mongoose...
const mongoose = require("mongoose")


// errorHandler...
const errorHandler = require("./handlers/errorHandler")


// Connection to mongodb...
mongoose
  .connect(process.env.MONGO_CONNECTION_KEY, {})
  .then(() => {
    console.log("Connection to mongodb successful")
  })
  .catch(() => {
    console.log("Connection to mongodb failed")
  })

const app = express()

// Middleware / Handlers...
app.use(express.json())

const PORT = 8000

// Models...
require("./models/movie.model")

// Routes...
app.post("/api/movies", addMovie)
app.get("/api/movies", getAllMovies)
app.get("/api/movies/:movie_id", getSingleMovie)
app.patch("/api/movies", editMovie)
app.delete("/api/movies/:movie_id", deleteMovie)

// Openai suggestions...
app.get("/api/movies/openai/getRecommendations",  movieRecommendation)

// Should be after the controllers/routes
// Middleware for error handling w/ express-async-errors
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started at: ${PORT}`)
})
