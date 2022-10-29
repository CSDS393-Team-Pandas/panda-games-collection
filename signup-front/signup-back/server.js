const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routesUrls = require('./routes/routes')
const cors = require('cors')

require('dotenv').config();

mongoose.connect(process.env.DATABASE_ACCESS,  () => console.log("Database connected"))

app.use(express.json()) //body parser
app.use(cors())
app.use('/app', routesUrls) //appended to /app 
app.listen(4000, () => console.log("server is up and running"))

//connect application to a mongodb database
