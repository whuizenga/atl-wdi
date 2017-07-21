/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
const bodyParser= require('body-parser');
const methodOverride = require('method-override');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/
const todosController = require("./controllers/todos");

// log
app.use( logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', (req,res) => {
  res.send('This is our Home Page');
});

/* INDEX TODOS */
app.use('/todos/', todosController);

// Start server
app.listen(port, () => {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});

