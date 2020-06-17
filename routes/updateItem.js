//require Express and Router
const express = require('express');
const updateItemRouter = express.Router();

//require controller
const controller = require('../controllers/updateItemController');

//send to relevant controller 
updateItemRouter.use('/',(req,res,next)=>{

    return controller.updateItemController(req,res,next);
});

//exporting the router to index
module.exports = updateItemRouter;