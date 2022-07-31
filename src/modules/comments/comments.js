const commentsModel = require('../../model/comments')
const productModel = require('../../model/products')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await commentsModel.find().populate("productId"))
            
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { name, surname, text, stars, productId } = req.body
            
            const newCommentsModelModel = new commentsModel({ name, surname, text, stars, productId })
            const product = await productModel.findOne({id:productId})

            product.comments.push(newCommentsModelModel._id)

            await newCommentsModelModel.save()
            await product.save()

            res.send(newCommentsModelModel)
        } catch (error) {
            console.log(error)
        }
    },
    // PUT: async(req,res)=>{
    //     try {
    //         const { id,name } = req.body
    //         res.send(await commentsModel.findByIdAndUpdate(id,{name}))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },
    DELETE: async (req, res) => {
        try {
            const { id } = req.body
            res.send(await commentsModel.findByIdAndRemove(id))
        } catch (error) {
            console.log(error)
            
        }
    }
}