//require DB model
const db = require('../models/toDoSchema');

//for updating item details
module.exports.updateItemController = (req,res,next)=>{

    let choice = req.originalUrl.charAt(8);
    let id = req.originalUrl.substring(10);
    //for changing status i.e marked or unmarked
    if(choice=='s')
    {
        db.findOne({_id:id},(err,entry)=>{
            if(err)
            {
                console.log(err);
                return;
            }

            entry.status=!entry.status;
            entry.save();
        });
    }
    else//for deleting an item
    {
        db.findOneAndDelete({_id:id},(err,entry)=>{
            if(err)
            {
                console.log(err);
                return;
            }
        });
    }
    res.redirect('back');
}