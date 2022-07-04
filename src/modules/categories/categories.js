const categorieModel = require('../../model/categories')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await categorieModel.find())
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const {name}= req.body
            const newCategorieModel = new categorieModel({ name})
            await newCategorieModel.save()
            res.send(newCategorieModel)
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const { id,name } = req.body
            res.send(await categorieModel.findByIdAndUpdate(id,{name}))
        } catch (error) {
            console.log(error)
        }
    },
    DELETE: async (req, res) => {
        try {
            const { id } = req.body
            res.send(await categorieModel.findByIdAndRemove(id))
        } catch (error) {
            console.log(error)
            
        }
    }
}