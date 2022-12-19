const Post = require('./../models/Post');

exports.getIndexPage = async (req, res) => {
  const posts = await Post.find({}).sort('-title'); //sort({createDate: -1});
  res.render('index', {
    posts,
  });
};

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add_post');
};

exports.getPostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
};

exports.getEditPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('edit_post', { post });
  };
  
