const mongoose = require('mongoose')

const SeasonSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        trim:true
    },
    is_delete:{
        type: Boolean,
        required: true,
        default:true
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})

const seasonModel = mongoose.model("Season", SeasonSchema)

module.exports = seasonModel