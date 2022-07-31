const productModel = require('../../model/products')
const categorieModel = require('../../model/categories')
const seasonModel = require('../../model/season')
const ageCategorieModel = require('../../model/ageCategories')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await productModel.find().populate("categorieId").populate("seasonId").populate("ageCategoryId").populate("comments"))
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const {img,
                name,
                price,
                color,
                size,
                categorieId,
                seasonId,
                ageCategoryId,
                componentPart,
                text}= req.body
            const newProductModel = new productModel(
                {
                    img,
                    name,
                    price,
                    color,
                    size,
                    categorieId,
                    seasonId,
                    ageCategoryId,
                    componentPart,
                    text
                })
            const category = await categorieModel.findOne({ _id: categorieId })
            const season = await seasonModel.findOne({id:seasonId})
            const ageCategories = await ageCategorieModel.findOne({id:ageCategoryId})

            category.products.push(newProductModel._id)
            season.products.push(newProductModel._id)
            ageCategories.products.push(newProductModel._id)

            await category.save()
            await season.save()
            await ageCategories.save()
            await newProductModel.save()

            res.send(newProductModel)
        } catch (error) {
            console.log(error)
        }
    },
    // PUT: async(req,res)=>{
    //     try {
    //         const { id,name } = req.body
    //         res.send(await categorieModel.findByIdAndUpdate(id,{name}))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },
    DELETE: async (req, res) => {
        try {
            const { id } = req.body
            res.send(await productModel.findByIdAndRemove(id))
        } catch (error) {
            console.log(error)
            
        }
    }
}