const mongoose = require("mongoose")

const AgeCategorieSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        trim:true
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
    products:[{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
})

const ageCategorieModel = mongoose.model("AgeCategorie", AgeCategorieSchema)

module.exports = ageCategorieModel