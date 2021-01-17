const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

//postSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post', postSchema);
