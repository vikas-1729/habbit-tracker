const habbitModal = require('../modals/habit');
module.exports.home=function(req,res){
    let complete=false;// intialsie complete with false only make it true when you try to add habbit
    habbitModal.find({},function(err,data){
        if(err){
            console.log(`error occur ${err}`);
            return ;
            
        }
        return data;//send data to promise to use it 
        

    }).then((data)=>{
        if(req!=undefined){
            if(req.body.complete!=undefined){
            complete=req.body.complete;//change value of complete when i has add habbit and this is for more option..
            }
            res.render('home',{
                'habbit':req.body.addHabbit,
                'complete':complete,
                'habbitList':data
            });
        }
    }); 
};
// this controller after i have add habbit
module.exports.addHabbit=function(req,res,next){
    //console.log(req.body.addHabbit);
   req.body.complete=true;//only make complete true so that again it go home page and open to fill more spaces
    next();
}
module.exports.addthisHabbit=function(req,res){
    let arr=new Array();
    for(let i=0;i<7;i++){
        arr.push('Not-Fill');//Initialising with not-fill in starting before pushing in database
    }
    let obj={
        'habbit':req.body.habbit,
        'time':req.body.time,
        'category':req.body.category,
        'message':req.body.message,
        'daily-work':arr
    };
    habbitModal.create(obj).then(()=>{
        res.redirect('/');
    });
   
};
//Controller for view Me rouetr
module.exports.viewMe=function(req,res){// In view me we take object id and take out some data mainly daily-work array
    habbitModal.findOne({'_id':req.query.id},'daily-work habbit message',function(err,data){
            if(err){
                console.log(`erroe ${err}`);
                return;
            }
            return data;
    }).then((data)=>{
       res.render('viewData',{
           'data':data,
           'id':req.query.id
       }); 
    });
};
//controller for saving or updating work i.e done not done etc
module.exports.saveWork=function(req,res){
        let index=req.query.index;
        let variable='daily-work.'+index.toString();
        habbitModal.updateOne(
            {'_id':req.query.id},
            {$set:{[variable]:req.body.workValue}// updating with given value
        },
            function(err,data){
                if(err){
                    console.log(`err${err}`);
                    return;
                }
                res.redirect('/viewMe?id='+req.query.id);
                
            });
        

};
// handling delete
module.exports.deleteMe=function(req,res){// simply delete
    habbitModal.findByIdAndDelete({_id:req.query.id},function(err,data){
        if(err){
            console.log(`err${err}`);
            return;
        }
        res.redirect('/');
       
    });

};