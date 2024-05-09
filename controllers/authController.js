const { hashPass, comPass } = require('../helpers/authHelper');
const User=require('../models/userModel');
const jwt=require('jsonwebtoken');

const registerController=async (req,res)=>{
    try{
        const {name,email,password,phone,address}=req.body;

        if(!name){
            return res.send({message:'Please enter your name'});
        }
        if(!email){
            return res.send({message:'Please enter your email'});
        }
        if(!password){
            return res.send({message:'Please enter the password'});
        }
        if(!phone){
            return res.send({message:'Please enter your phone number'});
        }
        if(!address){
            return res.send({message:'Please enter your address'});
        }

        const existingUser= await User.findOne({email});

        if(existingUser){
            return res.status(200).send({
                success: true,
                message: 'This email is already in use.'
            })
        }

        const hashedPass= await hashPass(password);

        const newUser= new User({
            name,email,phone,address,
            password: hashedPass
        })
        newUser.save();

        res.status(200).send({
            success: true,
            message: 'New User created',
            user: newUser
        })
    }
    catch(err){
        console.log(err);

        res.status(500).send({
            success: false,
            message: 'Error in sign-in',
            error: err
        })
    }
};

const loginController= async (req,res) => {
    try{
        const {email,password}=req.body;

        if(!email||!password){
            return res.status(404).send({
                success:false,
                message: 'Invalid email or password'
            })
        }

        const user=await User.findOne({email});
        if(!user){
            return res.status(200).send({
                success: false,
                message: 'You are not signed in'
            })
        }

        if(!comPass(password,user.password)){
            return res.status(200).send({
                success: false,
                message: 'Invalid password'
            })
        }

        const token=jwt.sign({_id: user._id},process.env.JWT_SECRET,{
            expiresIn: '30d'
        });

        res.status(200).send({
            success: true,
            message:'Login successfully',
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token
        })
    }
    catch(err){
        console.log(err);

        res.status(500).send({
            success: false,
            message: 'Error in login',
            error: err
        })
    }
}

module.exports={registerController,loginController};