//acquire mongoose
const mongoose = require('mongoose');

//setup DB
mongoose.connect('mongodb://localhost/to_do', {useNewUrlParser: true, useUnifiedTopology: true});

//connect to DB
const db = mongoose.connection;

//on error
db.on('error', console.error.bind(console, 'connection error:'));

//once connection is open
db.once('open',()=> {
    console.log('Connected to DB');
});