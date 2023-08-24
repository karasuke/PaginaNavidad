const express = require('express'); 
const path = require('path');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

//setting
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev')); 
app.use (myConnection(mysql, {  
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));
app.use(express.urlencoded({extended: false}));



//importing routes
const routesCustomer = require('./routes/customer');


//routes

app.use('/', routesCustomer);


//static files
app.use(express.static(path.join(__dirname, 'public')));


