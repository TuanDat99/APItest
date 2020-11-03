const Employee = require('../models/Employee')

//show the list 
const index=(req, res, next) =>{
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

//store new 
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
    .then(response => {
        res.json({
            message: 'Employee added successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error'
        })
    })
}

//update
const update=(req, res, next) => {
    let employeeID = req.body.employeeID

    let updatedData ={
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age

    }
    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Employee update'
        })
    })
    .catch(error => {
        res.json({
            message:'An error'
        })
    })
}

//delete
const destroy =(req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        res.json({
            message:'Employee deleted successfully !'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error'
        })
    })
}

module.exports ={
    index  , show, store, update, destroy
}