const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const movieRouter = require('./routes/MovieRoutes')
const userRouter = require('./routes/UserRoutes')

const app = express()
app.use(express.json())
app.use('/movies',movieRouter)
app.use('/users',userRouter)

mongoose.connect(process.env.DATABASE_CONNECT_STRING)
.then(() => {
    console.log("Db got connected")
})
.then(() => {
    console.log("Server is running on port : 3040")
    app.listen(3040)})
.catch(err => console.log("Error in connecting to database, error : " ,err.message))


/** 
 * connect string : 
 *          mongodb+srv://admin:<password>@cluster0.vdogt.mongodb.net/?retryWrites=true&w=majority
 * password : 
 *          kU1ZxQYOoE0Tt2KA
 *  */