const temp2=require('mongoose')
//const temp12=function(){temp2.connect('mongodb://localhost:27017/book',{
//    useNewUrlParser:true,
//    useNewUnifiedTopology:true,
//}).then(function(){
//    console.log('hello')
//})
//}
const temp12=async function(){
    await temp2.connect(process.env.mongo,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(function(){
        console.log('hello')
    })
}
module.exports=temp12