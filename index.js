const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const URL = 'mongodb://localhost:27017/nodePractice';

const postRoutes = require('./routes/postRoutes');

const userRoutes = require('./routes/userRoutes');

const PORT = 5001;

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

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
