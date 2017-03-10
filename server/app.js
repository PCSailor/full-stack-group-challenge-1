var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var warehouseRouter = require('./routes/warehouse');


// app.get('/',function(req,res){
//   console.log("hit get path");
//   res.sendFile(path.resolve('server/public/views/index.html'));
// });
//middleware
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/warehouse', warehouseRouter);

app.listen(3000, function() {
  console.log('listening on 3000');
});
