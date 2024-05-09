const jwt=require('jsonwebtoken');
const User = require('../models/userModel');

const protect= async(req,res,next) =>{
    try{
        const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user=decode;

        next();
    }
    catch(err){
        console.log(err);

        res.status(404).send({
            success:false,
            message:'You need to be logged in to perform this action'
        })
    }
}

const isAdmin= async(req,res,next)=> {
    try{
        const user=await User.findById(req.user._id);

        if(user.role!==1){
            return res.status(401).send({
                success: false,
                message: 'Only admin can perform this action'
            })
        }
        next();
    }
    catch(err){
        console.log(err);

        res.status(401).send({
            success: false,
            error: err,
            message: 'Error in admin middleware'
        })
    }
}

module.exports={protect,isAdmin};