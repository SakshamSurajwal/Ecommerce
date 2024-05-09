const bcrypt=require('bcrypt');

const hashPass= async(password)=>{
    try{
        const salt=10;
        const hashedPass=await bcrypt.hash(password,salt);

        return hashedPass;
    }
    catch(err){
        console.log(err);
    }
};

const comPass =async(password,hashedPass)=>{
    return await bcrypt.compare(password,hashedPass);
};

module.exports={hashPass,comPass};
