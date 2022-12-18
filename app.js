const express = require('express');
const app = express();
//const ejs = require('ejs')
const port = 5000;
app.set("view engine", "ejs")

//Middlewares 
app.use(express.static('public'));

//Routes
app.get('/', (req, res) => 
{
  //const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  //res.status(200).send(blog);
  res.render('index')
});

app.get('/about', (req, res) => 
{
  res.render('about')
});

app.get('/add_post', (req, res) => 
{
  res.render('add_post')
});

app.get('/post', (req, res) => 
{
  res.render('post')
});

app.listen(port, () => 
{
  console.log(`Sunucu ${port} numaralı port ile başlatıldı`);
});
