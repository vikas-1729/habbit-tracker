const express=require('express');

const router=express.Router();

// taking controller
const controller=require('../controller/index');
router.get('/',controller.home);
module.exports=router;