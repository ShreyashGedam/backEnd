const {Router} = require("express")
const CartModel = require("../models/cart")
const cartRouter = Router()

cartRouter.post("/:userId", async(req,res) => {
    const userId = req.params.userId
    var payload = {
        ...req.body,
        userId 
    }  
    const task = await new CartModel(payload)
    // console.log(task)
    task.save( (err,success) => {
        if(err){
            return res.status(500).send({message : "Something went wrong"})
        }
        return res.status(201).send(success)
    }) 
})  
  
cartRouter.get("/:userId" , async(req,res) => {
    const userId = req.params.userId
    const task = await CartModel.find({userId})
    // console.log(task)
    return res.status(200).send(task) 
})


cartRouter.delete("/:productId" ,async(req,res) => {

    const task = await CartModel.findByIdAndDelete(req.params.productId)
    
    return res.send(task)

} )

module.exports = cartRouter