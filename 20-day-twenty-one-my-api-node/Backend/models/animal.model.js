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
  taxonomy: {
    type: [String],
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
    format: "uri",
    required: true,
  },
});

module.exports = mongoose.model("Animal", animalSchema);
