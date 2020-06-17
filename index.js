//set port, import express & get bodyParser
const port = 8000;
const express = require('express');
// for using DB
const db = require('./config/mongoose');

//create express appliaction
const app = express();

// set view engine
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
// link static files
app.use(express.static("./assets"));

//import all the Routers
const indexRouter = require('./routes/index');
const addItemRouter = require('./routes/addItem');
const updateItemRouter = require('./routes/updateItem');

// sending requests to respective Routers
app.use('/update',updateItemRouter);
app.post('/add',addItemRouter);
app.use('/',indexRouter);

// adding listener
app.listen(port,(err)=>{
    if(err)
    {
        console.log('Error : '+err);
        return;
    }

    console.log('The Server is live at Port :'+ port);
});