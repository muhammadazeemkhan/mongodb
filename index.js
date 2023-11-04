const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const userRoute = require('./Routes/user')
app.use(morgan('tiny'))
app.use(express.json())

mongoose.connect('mongodb+srv://azeemhps:H1716056@cluster0.l0cycdy.mongodb.net/').then(() =>
    console.log('Mongodb Connected'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send(new Date())
})

app.use('/user', userRoute)

app.listen(3001, () => {
    console.log('App is running on port 3000ش')
})