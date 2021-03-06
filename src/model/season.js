const mongoose = require('mongoose')

const SeasonSchema = mongoose.Schema({
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

const seasonModel = mongoose.model("Season", SeasonSchema)

module.exports = seasonModel