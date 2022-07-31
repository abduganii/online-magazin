const adminModel = require('../../model/admin')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await adminModel.find())
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { name,password } = req.body
            const newAdminModel = new adminModel({ name,password})
            await newAdminModel.save()
            res.send(newAdminModel)
        } catch (error) {
            console.log(error)
        }
    },
    // PUT: async(req,res)=>{
    //     try {
    //         const { id,type } = req.body
    //         res.send(await seasonModel.findByIdAndUpdate(id,{type}))
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // },
    // DELETE: async (req, res) => {
    //     try {
    //         const { id } = req.body
    //         res.send(await seasonModel.findByIdAndRemove(id))
    //     } catch (error) {
    //         console.log(error)
            
    //     }
    // }
}