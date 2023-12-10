const mongoose = require("mongoose")

const editMovie = async (req, res) => {
  const movieModel = mongoose.model("movies")
  const { movie_id, movie_name, rating, info, description } = req.body

  if (!movie_id) throw "Movie id is required!"

  await movieModel.updateOne(
    {
      _id: movie_id,
    },
    {
      movie_name: movie_name,
      rating: rating,
      info: info,
      description: description,
    },
    {
      runValidators: true,
    }
  )

  res.status(200).json({
    status: "success",
    message: "Movie updated successfully",
  })
}
module.exports = editMovie
