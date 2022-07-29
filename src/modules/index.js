const express = require('express')
const router = express.Router()
const categories = require('./categories/categories')
const seasons = require('./season/season')
const products = require('./products/products')

router
    //categories
    .get('/categories',categories.GET)
    .post('/newCategorie',categories.POST)
    .put('/updateCategorie',categories.PUT)
    .delete('/dropCategorie', categories.DELETE)
    //seasons
    .get('/seasons',seasons.GET)
    .post('/newSeason',seasons.POST)
    .put('/updateSeason',seasons.PUT)
    .delete('/deleteSeason', seasons.DELETE)
    //products
    .get('/products',products.GET)
    .post('/newProduct',products.POST)

module.exports = router