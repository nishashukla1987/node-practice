const express = require('express');

const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} = require('../controller/postController');

const router = express.Router();

router.post('/', createPost);

router.get('/', getPosts);

router.get('/:id', getPost);

router.patch('/:id', updatePost);

router.delete('/:id', deletePost);

module.exports = router;
