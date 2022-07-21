const {Router} = require("express")
const Mainpage2Model = require("../models/main2page")

const mainRouter2 = Router()

mainRouter2.get("" , async(req,res) => {
    const tasks = await Mainpage2Model.find()
    return res.send(tasks)
})

 
module.exports = mainRouter2

