const { Router } = require('express');
const router = Router();

const userRoutes = require('./userRoutes')

router.use('/user-create', userRoutes)


module.exports = router


