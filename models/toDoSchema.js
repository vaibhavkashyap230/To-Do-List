//importing mongoose
const mongoose = require('mongoose');

//declaring Schema
const toDoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: String
    }
});

//creating the DB model
const toDo = mongoose.model('toDo',toDoSchema);

module.exports = toDo;