const express = require("express")
const connection = require("./db")
const cors = require("cors")
require("dotenv").config()

const authRouter = require("./routes/auth.routes")
const taskRouter = require('./routes/task.routes')
const productRouter = require("./routes/products")
const mainRouter = require("./routes/mainpage")
const mainRouter2 = require("./routes/mainpage2")
const cartRouter = require("./routes/carts")
const port = process.env.PORT

const app = express()
 
app.use(cors()) 
app.use(express.json()) 
app.use("/auth",authRouter)
app.use('/user',taskRouter)
app.use('/products',productRouter)
app.use("/main-page-one",mainRouter) 
app.use("/main-page-two",mainRouter2)
app.use("/cartAdd",cartRouter)

app.listen(port , async() => {
    try{     
        
        await connection
        console.log("Connected to db success")
    }
    catch{ 
        console.log("Something wrong connecting")
    }

    console.log(`Serrver is listening localhost : ${port}`)
})