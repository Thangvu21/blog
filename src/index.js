const express = require('express');
const morgan = require('morgan');
const { engine } = require("express-handlebars");
const path = require('path');
const app = express();
const port = 3000;

// http logger
app.use(morgan('combined'));

// template engine init engine
app.engine("hbs", engine({extname: '.hbs'}));
// su dung
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// __dirname la thu muc src cua minh

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
})
