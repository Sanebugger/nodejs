//schemas lies here

const mongus = require('mongoose');

const productSchema = new mongus.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

module.exports = mongus.model('groceries',productSchema);