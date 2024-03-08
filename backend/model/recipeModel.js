const mongoose = require('mongoose');

// Define yer data model
const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  instructions: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
