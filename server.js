const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const EmployeeRoute = require('../login-server/employee')
mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('DB Connection Established!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/employee', EmployeeRoute)