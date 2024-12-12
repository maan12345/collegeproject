const express=require('express')
const cors=require('cors')
const routeruser=require('./routeruser.js')
const database=require('./database.js')
const user=require('./modeluser.js')
const cookieparser=require('cookie-parser')
const multer=require('multer')
const filesys=require('fs')
const app=express()
//const database=require('./database.js')
//const user=require('./modeluser.js')
require('dotenv').config()
app.use(express.json())
app.use(cookieparser())
const photomiddle=multer({dest:'upload'})
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
}))
app.use('/app/v1',routeruser)
app.use('/upload',express.static(__dirname+'/upload'))
app.get('/test',function(req,res){
    res.json("test ok")
})
app.listen(4000,function(){
    console.log('hello')
})
database()
//const routeruser=require('./routeruser.js')
//app.use('/app/v1',routeruser)
//function usercreate(){
//    
//}
//app.post('/register',function(req,res){
//    const {name,email,password}=req.body
//    res.json({name,email,password})
//    const newuser=await user.create({name:name,email:email,password:password})
//})