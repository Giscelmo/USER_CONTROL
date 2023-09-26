const { Router } = require('express');
const router = Router();

const userRoutes = require('./userRoutes')

router.use('/userRoutes', userRoutes)


module.exports = router


