const express=require('express');
const {registerController, loginController}=require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const router=express.Router();

router.post("/register",registerController);
router.post("/login",loginController);

module.exports=router;