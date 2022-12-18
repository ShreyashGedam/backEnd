const { Router } = require("express")
const ProductsModel = require("../models/products")
const productRouter = Router()

productRouter.get("", async (req, res) => {

    var obj = req.query

    if (req.query.name != undefined) {
        var mname = req.query.name.split(":")
        console.log(mname)
        var obj = {
            ...req.query,
            name: mname
        }
    }

    const tasks = await ProductsModel.find(obj)
    // const tasks = await ProductsModel.find({ name: { $in: filter.name } })
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