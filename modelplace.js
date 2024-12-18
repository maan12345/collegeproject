const temp2=require('mongoose')
const temp12=temp2.Schema({
    title:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    owner:{
        type:temp2.Schema.Types.ObjectId,
        ref:'user'
    },
    photos:[{
      type:String,
      required:true,  
    }],
    description:{
        type:String,
        required:true,
    },
    perks:[{
        type:String,
        required:true,
    }],
    extrainfo:{
        type:String,
        required:true,
    },
    checkin:{
        type:String,
        required:true,
    },
    checkout:{
        type:String,
        required:true,
    },
    maxguest:{
        type:Number,
        required:true,
    }
})
module.exports=temp2.model('place',temp12)