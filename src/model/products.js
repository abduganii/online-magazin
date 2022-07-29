const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    img: [String],
    name: {
        type: String,
        required: true,
        trim:true
    },
    price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
    quantity: {
        type: Number,
        required: true,
    },
    color: [String],
    size: [Number],
    categorieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Categorie"
    },
    season: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Season"
    },
    ageCategory:{
        type: String,
        required: true,
    },
    componentPart: {
        type: String,
        required:true
    },
    thoughts:[String]

})

const productModel = mongoose.model("Product", ProductSchema)

module.exports = productModel