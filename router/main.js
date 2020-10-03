var fileControl = require('../module/fileControl');
var bodyParser = require('body-parser');

module.exports = function(app){
  //to use form
  app.use(bodyParser.urlencoded({extended:true}));
  
  app.get('/', function(req, res){
    fileControl.readFilelist(req, res);
  })

  app.get('/contact', (req, res) => {
    res.render('contact')
  })

  app.get('/list', (req,res) => {
    res.render('list')
  })
	
  app.get('/createDocument', (req, res) => {
    res.render('createDocument')
  })
  app.post('/createDocument', (req, res) => {
    fileControl.createDocument(req, res, req.body);
  })
}