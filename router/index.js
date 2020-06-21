const express=require('express');

const router=express.Router();

// taking controller
const controller=require('../controller/index');
router.get('/',controller.home);
router.post('/addtoHabit',controller.addHabbit,controller.home);
// handling the post form which come after we add complete info
router.post('/addthisHabbit',controller.addthisHabbit);

//handling view me
router.get('/viewMe',controller.viewMe);

//handling update of every work days
router.post('/saveWork',controller.saveWork);
module.exports=router;

//handling delete
router.get('/deleteMe',controller.deleteMe);