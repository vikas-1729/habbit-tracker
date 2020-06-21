const habbitModal = require('../modals/habit');
module.exports.home=function(req,res){
   
   let complete=false;
   
    let data1;
    habbitModal.find({},function(err,data){
        if(err){
            console.log(`error occur ${err}`);
            return ;
            
        }
       // console.log('data',data);
        console.log("OKKK wait",data);
        return data;
        

    }).then((data)=>{
        if(req.body.addHabbit!=undefined&&req.body.complete==true){

            res.render('home',{
                'habbit':req.body.addHabbit,
                'complete':'true',
                'habbitList':data
            });
        }else{
            res.render('home',{
                'complete':'false',
                'habbitList':data
            });
        }
    }); 
    
};
module.exports.addHabbit=function(req,res,next){
    //console.log(req.body.addHabbit);
    req.body.complete=true;
    next();
}
module.exports.addthisHabbit=function(req,res){
    console.log(req.body.habbit);
    let arr=new Array();
    for(let i=0;i<7;i++){
        arr.push(-1);
    }
    let obj={
        'habbit':req.body.habbit,
        'time':req.body.time,
        'category':req.body.category,
        'message':req.body.message,
        'daily-work':arr
    };
    habbitModal.create(obj);
    res.redirect('/');
}