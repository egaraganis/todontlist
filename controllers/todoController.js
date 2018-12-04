var bodyParser = require('body-parser')
var mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({extended: false}); // middleware

var data=[]; // todo items will be stored here

module.exports = function(app){
  // set up simple routing , handle http requests
  app.get('/todo',function(req,res) {
      res.render('todo',{todos:data});
  });

  app.post('/todo',urlencodedParser,function(req,res){
    var todoitem = Object.values(req.body);
    data.push(todoitem[0]);
    var i;
    for(i=0;i<data.length;i++){
      console.log(data[i]);
    }
    res.redirect(req.originalUrl);
  });

  app.delete('/todo',urlencodedParser,function(req,res){
    var item = Object.values(req.body);
    var found = data.indexOf(item[0]);
    while (found !== -1) {
      data.splice(found, 1);
      found = data.indexOf(item);
    }
    try{
      console.log('trying redirect');
      res.redirect(req.originalUrl);
    }
    catch(err){
      console.log('cannot redirect');
    }
  });
}
