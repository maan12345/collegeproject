const temp2=require('mongoose')
const temp12=new temp2.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})
module.exports=temp2.model('user',temp12)