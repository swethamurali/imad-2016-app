var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  
});

app.get('/page', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'page.html'));
  
});

app.get('/products', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'products.html'));
 
  
});

app.get('/order', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'order.html'));
  
});

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
  
});











app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
