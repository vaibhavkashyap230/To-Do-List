//require Express and Router
const express = require('express');
const addItemRouter = express.Router();

//importing controller
const controller = require('../controllers/addItemController');

//sendind to relevant controller
addItemRouter.use('/add',(req,res,next)=>{
    return controller.addItemController(req,res,next);
});

//exporting the router to index
module.exports = addItemRouter;