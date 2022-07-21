const {Router} = require("express")
const ProductsModel = require("../models/products")
const productRouter = Router()

productRouter.get("" , async(req,res) => {
    const tasks = await ProductsModel.find()
    return res.send(tasks)
})

 
module.exports = productRouter