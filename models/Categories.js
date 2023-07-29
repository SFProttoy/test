const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'category'
    }],

});

const CategoriesModel = mongoose.model("Categories", categoriesSchema);

module.exports = CategoriesModel;


