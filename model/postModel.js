const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

//postSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post', postSchema);
