const { Router } = require("express")
const ProductsModel = require("../models/products")
const productRouter = Router()

productRouter.get("", async (req, res) => {

    var x = req.query
    const tasks = await ProductsModel.find(x)

    return res.send(tasks)
})
 
productRouter.get("/:userId/:productId", async (req, res) => {
    // const userId = req.params.userId
    const product = { _id: req.params.productId }

    const tasks = await ProductsModel.find(product)
    // console.log(tasks)
    return res.send(tasks)      

})

 
module.exports = productRouter     