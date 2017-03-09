var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var warehouseRouter = require('./routes/warehouse');

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', warehouseRouter);

app.listen(3003, function() {
  console.log('listening on 3000');
});
