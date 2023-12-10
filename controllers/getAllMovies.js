const mongoose = require("mongoose")

const getAllMovies = async (req, res) => {
  const moviesModel = mongoose.model("movies")

  const moviesData = await moviesModel.find({
    // rating: 10
  })

  res.status(200).json({
    status: "success",
    data: moviesData,
  })
}

module.exports = getAllMovies
