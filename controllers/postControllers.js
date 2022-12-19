const Post = require('./../models/Post');

exports.createPost = async (req, res) => 
{
  await Post.create(req.body)
  res.redirect('/');
}

exports.updatePost = async (req, res) => 
{
  const post = await Post.findById(req.params.id);
  post.title = req.body.title;
  post.detail = req.body.detail;
  await post.save();
  res.redirect('/');
}

exports.deletePost = async (req, res) => 
{
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
}