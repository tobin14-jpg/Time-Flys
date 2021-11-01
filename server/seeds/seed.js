const db = require('../config/connection');
const { Post } = require('../models');
const blogPost = require('./blogPosts.json');

db.once('open', async () => {
  await Post.deleteMany({});
  await Post.insertMany(blogPost);

  console.log('Blogs seeded!');
  process.exit(0);
});