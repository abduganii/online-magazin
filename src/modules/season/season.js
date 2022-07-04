const seasonModel = require('../../model/season')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await seasonModel.find())
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { type } = req.body
            const newSeasonModel = new seasonModel({type})
            await newSeasonModel.save()
            res.send(newSeasonModel)
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const { id,type } = req.body
            res.send(await seasonModel.findByIdAndUpdate(id,{type}))
        } catch (error) {
            console.log(error.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const { id } = req.body
            res.send(await seasonModel.findByIdAndUpdate(id,{is_delete:false}))
        } catch (error) {
            console.log(error)
            
        }
    }
}