const commentsModel = require('../../model/comments')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await commentsModel.find())
            
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const {name,surname,text,stars}= req.body
            const newCommentsModelModel = new commentsModel({ name,surname,text,stars})
            await newCommentsModelModel.save()
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