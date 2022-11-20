const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//MOTOR EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

//URL PATH Y CSS
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//MIS RUTAS
const routerAdmin = require('./router/admin');
const routerClient = require('./router/client');


app.use('/admin', routerAdmin);
app.use(routerClient);

app.listen(3000);