const mongoose = require('mongoose');
const Recipe = require('./models/cookingData'); 

const connectionString = 'mongodb+srv://kaustubh:<password>@cookingwebsitedata.yedtez5.mongodb.net/?retryWrites=true&w=majority&appName=CookingWebsiteData';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const newRecipe = new Recipe({
  title: 'Spaghetti Bolognese',
  ingredients: ['Spaghetti', 'Tomato Sauce', 'Ground Beef'],
  instructions: 'Cook the spaghetti, brown the beef, mix with sauce. Enjoy!',
});

newRecipe.save().then(() => console.log('Recipe added!'));

