//const ejs = require('ejs')
const express = require('express');
const mongoose = require('mongoose')
const Post = require('./models/Post')
const app = express();
const port = 5000;

//Connect Db
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db');

//Engine Template
app.set("view engine", "ejs")

//Middlewares 
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Routes
app.get('/', async (req, res) => 
{
  //const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  //res.status(200).send(blog);
  //-------------------------------
  const posts = await Post.find({}).sort('-title'); //sort({createDate: -1});
  res.render('index',{
    posts
  })
});

app.get('/about', (req, res) => 
{
  res.render('about')
});

app.get('/add_post', (req, res) => 
{

  res.render('add_post')
});

app.get('/posts/:id', async (req, res) => 
{
  const post = await Post.findById(req.params.id);
  res.render('post',{post})
});

app.post('/posts', async (req, res) => 
{
  await Post.create(req.body)
  res.redirect('/');
});

//Port Listen 
app.listen(port, () => 
{
  console.log(`Sunucu ${port} numaralı port ile başlatıldı`);
});
