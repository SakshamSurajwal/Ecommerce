const mongoose=require('mongoose');

const userSchema= mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    role:{
        type: Number,
        default: 0
    }
},
{
    timestamps: true
});

const User=mongoose.model('User',userSchema);

module.exports=User;