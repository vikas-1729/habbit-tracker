const mongoose=require('mongoose');

const Schema=new mongoose.Schema(createSchema());

const habbit=mongoose.model('habbit',Schema);
function createSchema(){
 var obj={
     'habbit':{
        type:String

     },
     'time':{
         type:String
     },
     'category':{
         type:String
     },
     'message':{
         type:String
     },
     'daily-work':{
         type:Array,
         maxItems:7
     }

 };
 return obj;
}
module.exports=habbit;