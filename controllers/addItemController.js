//require DB model
const db = require('../models/toDoSchema');

//create new item
module.exports.addItemController = (req,res,next)=>{

    db.create(req.body);
    res.redirect('back');
}