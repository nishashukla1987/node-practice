const Post = require('../models/Post');

module.exports = {
  createPost: async (req, res) => {
    try {
      const post = new Post({
        title: req.body.title,
        content: req.body.content,
      });
      if (post) await post.save();
      res.status(201).send({ message: 'post created', newpost: post });
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  getPosts: async (req, res) => {
    try {
      // if (req.query.page || req.query.limit) {
      //   const posts = await Post.paginate(
      //     {},
      //     { page: +req.query.page, limit: +req.query.limit }
      //   );
      //   if (posts) {
      //     res.status(200).send(posts);
      //   } else {
      //     res.status(404).send('Page not found');
      //   }
      // }
      const posts = await Post.find();
      if (posts) res.status(200).send(posts);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  getPost: async (req, res) => {
    try {
      const post = await Post.findOne({ _id: req.params.id });
      if (post) res.status(200).send(post);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  updatePost: async (req, res) => {
    try {
      const post = await Post.findOneAndUpdate(
        { _id: req.params.id },
        { title: req.body.title, content: req.body.content },
        { new: true, validator: true }
      );
      if (post) res.status(200).send({ message: 'post updated', post });
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  deletePost: async (req, res) => {
    try {
      const post = await Post.findOneAndDelete({ _id: req.params.id });
      if (post) res.status(200).send({ message: 'post deleted' });
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
};
