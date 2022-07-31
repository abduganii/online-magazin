const mongoose = require('mongoose')

const CategorieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique:false
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
    products:[{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]

})

const categorieModel = mongoose.model("Categorie", CategorieSchema)

module.exports = categorieModel