const { Router } = require('express')
const User = require('../models/user')

const router = Router()

router.post("/", async (req, res) => {
    const { firstName, lastName, email } = req.body

    const user = await User.create({ firstName, lastName, email })
    res.json({user})
})

module.exports = router