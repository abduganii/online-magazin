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
    color: [String],
    size: [Number],
    categorieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Categorie"
    },
    seasonId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Season"
    },
    ageCategoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"AgeCategorie"
    },
    componentPart: {
        type:String ,
        required: true,
    },
    text: {
        type:String ,
        required: true, 
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comments"
        }
    ],
    createdAt: {
        type: Date,
        default:Date.now
    },
    is_new:{
        type: Boolean,
        required: true,
        default:true
    }
})

const productModel = mongoose.model("Product", ProductSchema)

module.exports = productModel