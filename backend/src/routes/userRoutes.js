const { Router } = require('express')
const User = require('../models/user')
const sequelize =require('../database')
const {DataTypes}=require('sequelize')


const router = Router()

router.post("/", async (req, res) => {
    const { firstName, lastName, email } = req.body

    const user = await User(sequelize, DataTypes).create({ firstName, lastName, email })
    res.json({user})
})

module.exports = router