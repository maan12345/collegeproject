import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Registerpage(){
    const [name,setName]=useState('')
    const [email,emailsent]=useState('')
    const [password,setpassword]=useState('')
    function temp2(b){
      console.log(b.target.value)
      setName(b.target.value)
    }
    function temp12(b){
        console.log(b.target.value)
        emailsent(b.target.value)
    }
    function temp18(b){
        console.log(b.target.value)
        setpassword(b.target.value)
    }
    async function temp28(b){
        b.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)
        //axios.get('http://localhost:4000/test')
        try{
        await axios.post('http://localhost:4000/app/v1/register',{
            name:name,
            email:email,
            password:password
        })
        alert('registration succesful now login')
    }
    catch(b){
        console.log(b)
        alert('registration fail please try again')
    }
    }
    return(
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
            <h2 className='text-4xl text-center mb-4'> register</h2> 
            <form className='max-w-md mx-auto border' onSubmit={temp28}>
                <input type='text' placeholder='name' value={name} onChange={temp2}></input>
                <input type='email' placeholder='youremail@.com' value={email} onChange={temp12}></input>
                <input type='password' placeholder='pass' value={password} onChange={temp18}></input>
                <button className='primary'> register</button>
                <div className='text-center py-2 text-gray-500'> Already a member <Link className='underline text-black' to={'/login'}> login</Link></div>
            </form>
            </div>
        </div>
    )
}
export default Registerpage