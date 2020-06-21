const mongoose=require('mongoose');

const Schema=new mongoose.Schema(createSchema());

const habbit=mongoose.model('habbit',Schema);
function createSchema(){
 var obj={
     'habbit':{// name of habbit..
        type:String

     },
     'time':{// time when to do it..
         type:String
     },
     'category':{// category ..
         type:String
     },
     'message':{// message..
         type:String
     },
     'daily-work':[{//array for 7 days
        type:String,
        maxItems:7         
     }
     ]

 };
 return obj;
}
// making it exports
module.exports=habbit;