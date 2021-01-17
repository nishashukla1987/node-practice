const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const URL = 'mongodb://localhost:27017/myServer';

const PORT = 5001;

mongoose.connect(
  URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Database connected');
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  }
);
