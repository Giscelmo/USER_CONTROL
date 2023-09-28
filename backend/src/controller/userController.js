const User = require('../models/user')
module.exports = {
     async createUser(req, res) {
          const { firstName, lastName, email } = req.body

          const user = await User.create({ firstName, lastName, email })
          res.json({ user })
     }
}

