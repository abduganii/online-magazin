const mongoose = require('mongoose')
require('../model/categories')

const {connection} = require('../config')

const mongo = async () => {
    try {
        await mongoose.connect(connection.remote)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = mongo

