const mongoose = require('mongoose')
require('../model/categories')
require('../model/products')
require('../model/season')
require('../model/ageCategories')

const {connection} = require('../config')

const mongo = async () => {
    try {
        await mongoose.connect(connection.remote)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = mongo

