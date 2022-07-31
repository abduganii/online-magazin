const ageCategorieModel = require('../../model/ageCategories')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await ageCategorieModel.find().populate('products'))
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { type } = req.body
            const newAgeCategorieModel = new ageCategorieModel({type})
            await newAgeCategorieModel.save()
            res.send(newAgeCategorieModel)
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const { id,type } = req.body
            res.send(await ageCategorieModel.findByIdAndUpdate(id,{type}))
        } catch (error) {
            console.log(error.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const { id } = req.body
            res.send(await ageCategorieModel.findByIdAndRemove(id))
        } catch (error) {
            console.log(error)
            
        }
    }
}