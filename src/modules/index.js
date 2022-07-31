const express = require('express')
const router = express.Router()
const categories = require('./categories/categories')
const seasons = require('./season/season')
const products = require('./products/products')
const ageCategories = require('./ageCategoris/agecategoris')
const comments = require('./comments/comments')
const admin = require('./admin/admin')
const login = require('./login/login')
const auth = require('../meddlewares/auth')

router
    //login
    .post('/login', login)
    //admin
    .get('/admin',auth,admin.GET)
    .post('/newAdmin',admin.POST)
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
    //ageCategories
    .get('/ageCategories',ageCategories.GET)
    .post('/newAgeCategories', ageCategories.POST)
    .delete('/deleteAgeCategories', ageCategories.DELETE)
    //products
    .get('/products',products.GET)
    .post('/newProduct', products.POST)
    .delete('/deleteProduct', products.DELETE)
    // comments
    .get('/comments',comments.GET) 
    .post('/newComments',comments.POST) 
    .delete('/deleteComments',comments.DELETE) 


module.exports = router