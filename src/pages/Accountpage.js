import {useContext} from 'react'
import {usercontext} from '../Usercontext.js'
import {Navigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Placepage from './Placepage.js'
import Accountnav from './Accountnav.js'
function Accountpage(){
    const {user,setus,ready}=useContext(usercontext)
    const {subpage}=useParams()
    const [directhome,setdirecthome]=useState(null)
    console.log(subpage)
    async function logout(){
        await axios.post('http://localhost:4000/app/v1/logout') 
        //setus(null)
        setdirecthome('/')
        setus(null)
    }
    if(!ready){
        return 'loading...'
    }
    if(ready && !user && !directhome){
        return <Navigate to={'/login'}></Navigate>
    }
    //const {subpage}=useParams()
    //console.log(subpage)
    function linkclass(typeofselect=null){
     let classel='inline-flex gap-1 py-2 px-6 rounded-full';
     if(typeofselect==subpage || (subpage==undefined && typeofselect=='profile')){
        classel=classel+' bg-primary text-white rounded-full'
     }
     else{
        classel=classel+' bg-gray-200'
     }
        return classel
    }
    //async function logout(){
    //    await axios.post('http://localhost:4000/app/v1/logout') 
        //setus(null)
    //    setdirecthome('/')
    //    setus(null)
    //}
    if(directhome){
        return <Navigate to={directhome}></Navigate>
    }
    return(
        <div>
            <Accountnav></Accountnav>
            <div>
          {subpage==undefined && (
            <div className='text-center max-w-lg mx-auto'>
            Logged in as {user.name} ({user.email})<br/>
            <button className='primary max-w-sm mt-2' onClick={logout}> logout</button>
            </div>
          )}
          {
            subpage=='place' && (
                <Placepage></Placepage>
            )
          }
          </div>
        </div>
    )
}
export default Accountpage