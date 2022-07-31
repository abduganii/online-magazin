const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    surname: {
        type: String,
        required: true,
        trim:true
    },
    text: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
    productsid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }

})

const CommentModel = mongoose.model("Comments", CommentSchema)

module.exports = CommentModel