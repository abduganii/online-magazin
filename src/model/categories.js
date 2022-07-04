const mongoose = require('mongoose')

const CategorieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})

const categorieModel = mongoose.model("Categorie", CategorieSchema)

module.exports = categorieModel