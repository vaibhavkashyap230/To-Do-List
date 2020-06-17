//require DB model
const db = require('../models/toDoSchema');

//for showing list of items
module.exports.indexController = (req,res,next)=>{

    //to display all items
    if(req.body=={} || req.body.category=='All')
    {
        db.find({},(err,list)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            res.render('index',
            {
                a:list,
                category:req.body.category
            });
        });
    }//to display items of a certain category
    else
    {
        db.find(req.body,(err,list)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            res.render('index',
            {
                a:list,
                category:req.body.category   
            });
        });
    }
}