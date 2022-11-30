import * as dotenv from "dotenv";
import dbConnect from "./config/db.config.js";
import Recipe from "./models/Recipe.model.js";
import data from "./data.json" assert { type: "json" };

// Import of the model Recipe from './models/Recipe.model.js'

// Import of the data from './data.json'
//const data = require("./data");

dotenv.config();

dbConnect()
  .then(() => Recipe.deleteMany())
  .then(() =>
    Recipe.create({
      title: "bolo",
      level: "Easy Peasy",
      ingredients: "a, b, c",
      cuisine: "bla",
      dishType: "dessert",
      image: "https://images.media-allrecipes.com/images/75131.jpg",
      duration: 40,
      creator: "unknown",
      created: "11/30/2022",
    })
  );

// Connection to the database "recipe-app"

// Before adding any recipes to the database, let's remove all existing ones
//const delMany = Recipe.deleteMany();
//console.log(delMany);

// const newRecipe = await Recipe.create({
//   title: "bolo",
//   level: "Easy Peasy",
//   ingredients: "a, b, c",
//   cuisine: "bla",
//   dishType: "dessert",
//   image: "https://images.media-allrecipes.com/images/75131.jpg",
//   duration: 40,
//   creator: "unknown",
//   created: "11/30/2022",
// });

const recipes = Recipe.find();
//console.log(typeof recipes);

// Recipe.find().then((recipes) => {
//   console.log(recipes[0].title);
// });

// try {
//   Recipe.insertMany(data);
//   console.log("sucesso");
// } catch (error) {
//   console.log("Erro ao tentar usar insertMany");
// }
