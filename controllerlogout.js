const temp2=require('./modeluser.js')
const temp12=async function(req,res){
    res.cookie('token','').json({
        temp48:'hello',
        data:'you have been loggedout'
    }
    )
}
module.exports=temp12