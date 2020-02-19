var express = require('express');
var consign = require('consign')
var app = express();
var expressWs = require('express-ws')(app);
var bodyParser = require('body-parser');
var router = express.Router();
var cors = require('cors');
var middleware = require('./middleware');
require('dotenv').config()
global.conexoes = [];
/* Rotas WebScoket */
const peteca = require('./app/models/peteca');

/* Fim Rotas */
app.set('view engine','ejs');
app.use("/", router);

router.ws('/peteca', middleware,peteca);

app.listen(process.env.PORT,function(){

	console.log("Rodando express ", process.env.PORT);

});