/**
 * @jest-environment node
 */

const axios = require('axios');
axios.defaults.baseURL = 'http://127.0.0.1:5001/';

function create(article = {}) {
  return axios.post('/posts/', article);
}

test('simple create post', async () => {
  const createRes = await create({
    title: 'My Post',
    content: 'This is my first post',
  });
  expect(createRes.data.newpost.title).toMatch('My Post');
});
