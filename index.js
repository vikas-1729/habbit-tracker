// requiring express;
const express= require('express');

//giving port no
 const port =8000;

 //instate app
 const app=express();
//setting database

const db=require('./config/index');
 //setting views
  app.set('view engine','ejs');
  app.set('views','views');

  //setting static folder

  app.use(express.static('assest'));

  //now use router to route
  app.use(express.urlencoded());

//app.use(express.urlencoded);
  app.use('/',require('./router'));
 app.listen(port,function(err){
    if(err){
        console.log(`error occur${err}`);
        return;
    }
    console.log('wow connected to port',port);
 });