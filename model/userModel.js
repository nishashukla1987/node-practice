const URL = 'mongodb://localhost:27017/myServer';

const mongoose = require('mongoose');

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', function (e) {
  console.error('db.error:', e);

  process.exit(1);
});

db.once('open', function () {
  console.log('db.ready');
});

const userSchema = new mongoose.Schema({
  email: {
    required: true,

    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  token: {
    index: true,
    type: String,
  },
});

// use schema to create a model
const User = mongoose.model('User', userSchema);
