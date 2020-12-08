// call express framework
const express = require('express')

// call mongoose
const mongoose = require('mongoose')

// get our club 's database
const url = 'mongodb+srv://admin:wYIv0fY4FwPGmO0A@dsc.fyw2j.mongodb.net/newbietest?retryWrites=true&w=majority'
const app = express()

// connect to the remote database of our club :)
mongoose.connect(url, {useNewUrlParser:true})

// tell express that we want to use JSON
app.use(express.json())

// connect to the server:
mongoose.connection.on('open', () => {
    console.log('Ket noi dc rui` !!')
})

app.listen(5000, () => {
    console.log("Server started")
})

// declare routers:
const championRouter = require('./routers/champions')

// mention the routers:
app.use('/champions',championRouter)