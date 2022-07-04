const express = require('express')
const router = express.Router()
const categories = require('./categories/categories')

router
    .get('/categories',categories.GET)
    .post('/newCategorie',categories.POST)
    .put('/updateCategorie',categories.PUT)
    .delete('/dropCategorie',categories.DELETE)

module.exports = router