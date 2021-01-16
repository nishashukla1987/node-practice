const express = require('express');
//const { checkAuth } = require('../middlewares');
//const { generateToken } = require('../services/auth');

const { User } = require('../database/dbAuth');

const router = (module.exports = express.Router());

router.post('/register', async (req, res) => {
  const { id: email, password } = req.body;

  const userExists = await User.findOne({ email });
  console.log(userExists);

  if (userExists) {
    return res.status(401).send('Not Authorized');
  }

  const user = new User({
    email,
    password,
    token,
  });

  try {
    await user.save();
  } catch (e) {
    console.error(e);
    return res.status(400).send('Bad Request');
  }

  res.send({ token: user.token });
});
