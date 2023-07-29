const CategoriesModel = require("../models/Categories");

const makeCategories = async (res, req) =>{
  const jobQuerys = [];

const { category: categories, title, postDescription: description } = req.body;

// save category
categories.forEach(title => {
  const category = new Category({ title })
  jobQuerys.push(category.save());
});

// get all category was saved
const categoriesResult = await Promise.all(jobQuerys);

// category id temporary
const arrCategoryId = [];

// add category._id to arrCategoryId
categoriesResult.forEach(category => {
  arrCategoryId.push(category._id);
});

// save game with categoryId
const categoriess = new CategoriesModel({ title, category: arrCategoryId });
const result = await categoriess.save();

// show result
console.log(result);
}

module.exports = {
  makeCategories
}