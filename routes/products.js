const { Router } = require("express")
const ProductsModel = require("../models/products")
const productRouter = Router()

productRouter.get("", async (req, res) => {
 
    var obj = req.query
    // console.log(req.query)
    var { name } = req.query  

    if (name) {
        var name2 = name.split(",")
        obj = { 
            name: name2
        }
    }
 
    const tasks = await ProductsModel.find(obj)

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