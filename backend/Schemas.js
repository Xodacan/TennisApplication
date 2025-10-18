const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: String,
    country: String,
    age: String,
    hand: String,
    height: Number,
    matches: [
      {
        opponent: String,
        result: String,
        score: String,
        date: String,
        surface: String,
        tournament: String,
        round: String
      }
    ]

});

module.exports = mongoose.model("Player", playerSchema)
