require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')


app.use( express.static('public'));



app.get('/', (req, res)=>{
  res.render('home', {
    nombre: 'Jonathan',
    titulo: 'Practica HBS'
  });
})


app.get('/generic', (req, res)=>{
  //res.sendFile(__dirname + '/public/generic.html')
  res.render('generic', {
    nombre: 'Jonathan',
    titulo: 'Practica HBS'
  });
})


app.get('/elements', (req, res)=>{
  //res.sendFile(__dirname + '/public/elements.html')
  res.render('elements', {
    nombre: 'Jonathan',
    titulo: 'Practica HBS'
  });
})



app.get('*', (req, res)=>{
  res.render('404');
})


app.listen(port, ()=>{
    console.log(`Puerto ${port}`);
})