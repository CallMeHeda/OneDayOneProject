const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  habitat: {
    type: String,
    required: true,
  },
  diet: {
    type: String,
    required: true,
  },
  characteristic: {
    type: String,
  },
  behavior: {
    type: String,
  },
  conservation_status: {
    type: String,
    required: true,
  },
  fun_facts: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    format: "uri",
  },
});

module.exports = mongoose.model("Animal", animalSchema);
