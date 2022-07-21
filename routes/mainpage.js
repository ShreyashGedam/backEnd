const {Router} = require("express")
const MainpageModel = require("../models/mainpage")
const mainRouter = Router()

mainRouter.get("" , async(req,res) => {
    const tasks = await MainpageModel.find()
    return res.send(tasks)
})

 
module.exports = mainRouter

