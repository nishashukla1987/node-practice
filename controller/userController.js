const User = require('../models/User');

module.exports = {
  register: (req, res) => {
    try {
      const user = new User({
        username: req.body.username,
        password: req.body.password,
      });
      if (user)
        res.status(201).send({ message: 'user created', newUser: user });
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
};
