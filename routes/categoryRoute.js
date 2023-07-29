const express = require("express");
const {
  makeCategories
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/categories", makeCategories);



module.exports = router;