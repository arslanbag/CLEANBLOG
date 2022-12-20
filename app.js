//const ejs = require('ejs')
const express = require('express');
const mongoose = require('mongoose')
var methodOverride = require('method-override')
const pageControllers = require('./controllers/pageControllers')
const postControllers = require('./controllers/postControllers')
const app = express();
const port = process.env.PORT || 5000;

//Connect Db
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://aykut:jGCKH75HR2UcfBsB@cluster0.eenteif.mongodb.net/cleanblog-db?retryWrites=true&w=majority')

//Engine Template
app.set("view engine", "ejs")

//Middlewares 
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method', {methods : ['POST', 'GET']}))

//Routes
////Page
app.get('/',  pageControllers.getIndexPage);
app.get('/about', pageControllers.getAboutPage);
app.get('/posts/:id', pageControllers.getPostPage);
app.get('/add_post', pageControllers.getAddPage);
app.get('/edit_post/:id', pageControllers.getEditPost);

////Post
app.post('/posts', postControllers.createPost);
app.put('/posts/:id', postControllers.updatePost);
app.delete('/delete/:id', postControllers.deletePost);

//Port Listen 
app.listen(port, () => { console.log(`Sunucu ${port} numarali port ile başlatildi`);});
