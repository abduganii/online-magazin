const productModel = require('../../model/products')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await productModel.find())
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const {img,name, price,quantity,color,size,categorieId,season,ageCategory,componentPart,thoughts}= req.body
            const newCategorieModel = new productModel({ img,name, price,quantity,color,size,categorieId,season,ageCategory,componentPart,thoughts})
            await newCategorieModel.save()
            res.send(newCategorieModel)
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
    // DELETE: async (req, res) => {
    //     try {
    //         const { id } = req.body
    //         res.send(await categorieModel.findByIdAndRemove(id))
    //     } catch (error) {
    //         console.log(error)
            
    //     }
    // }
}