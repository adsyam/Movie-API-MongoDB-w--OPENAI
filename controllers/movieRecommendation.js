const { OpenAI } = require("openai")
require("dotenv").config()

const mongoose = require("mongoose")

const movieRecommendation = async (req, res) => {
  const movieModel = mongoose.model("movies")

  const allMovies = await movieModel.find({})

  const movieList = allMovies.map((key) => key.movie_name).join(",")

  const prompt = `I need a movie recommendation based on these movies: ${movieList}. Provide me with 10 suggestions! Only Provide the name and separate them by commas`

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  })

  res.status(200).json({
    status: "success",
    suggestion: chatCompletion.choices[0]?.message?.content,
  })
}

module.exports = movieRecommendation
