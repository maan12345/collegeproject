import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom'
import {useContext} from 'react'
import {usercontext} from '../Usercontext.js'
function LoginPage(){
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [direct,setdirect]=useState(false)
    const {user,setus}=useContext(usercontext)
    function temp12(b){
        console.log(b.target.value)
        setemail(b.target.value)
    }
     function temp18(b){
        console.log(b.target.value)
        setpassword(b.target.value)
    }
    async function temp28(b){
        b.preventDefault()
        console.log(email)
        console.log(password)
        try{
        const userinfo=await axios.post('http://localhost:4000/app/v1/login',{
            email:email,
            password:password
        })
        console.log(userinfo)
        console.log(userinfo?.data?.userfi)
        setus(userinfo?.data?.userfi)
        alert('login sucessful')
        setdirect(true)
          }
         catch(b){
            console.log(b)
            alert('please try again')
         }
    }
    if(direct==true){
        return <Navigate to={'/'}></Navigate>
    }
    return(
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
            <h2 className='text-4xl text-center mb-4'> login</h2> 
            <form className='max-w-md mx-auto border' onSubmit={temp28}>
                <input type='email' placeholder='youremail@.com' value={email} onChange={temp12}></input>
                <input type='password' placeholder='pass' value={password} onChange={temp18}></input>
                <button className='primary'> login</button>
                <div className='text-center py-2 text-gray-500'> Dont have an account yet? <Link className='underline text-black' to={'/register'}> register</Link></div>
            </form>
            </div>
        </div>
    )
}
export default LoginPage