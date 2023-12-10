const mongoose = require("mongoose")

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies")

  const { movie_name, info, rating, description } = req.body

  // validations...

//   try {
    // if (!movie_name) throw "Movie name is required!"
    if (!info) throw "Info must be provided!"
    if (!rating) throw "Rating is not provided!"
    if (rating < 1 || rating > 10) throw "Rating must be between 1 to 10"
//   } catch (e) {
//     res.status(400).json({
//       status: "failed",
//       message: e,
//     })
//     return
//   }

  // success!
//   try {
    const createdMovie = await moviesModel.create({
      movie_name: movie_name,
      info: info,
      rating: rating,
      description: description,
    })

    // console.log(createdMovie)
//   } catch (e) {
//     res.status(400).json({
//       status: "failed",
//       message: e.message,
//     })
//     return
//   }

  res.status(200).json({
    status: "success",
    message: "Movie added succesfully",
  })
}

module.exports = addMovie
