import {createContext} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'
export const usercontext=createContext({})
export default function Usercontextprovider({children}){
    const [user,setus]=useState(null)
    const [ready,setready]=useState(false)
     useEffect(()=>{async function getprofile(){
        if(!user){

            console.log('hello')
     const userdata=await axios.get('http://localhost:4000/app/v1/profile')
     console.log(userdata)
     if(userdata){
     setus(userdata.data)
     //setready(true)
     }
     setready(true)
        }
    }
    getprofile()
    },[])
    //const [user,setus]=useState(null)
    return(
    <usercontext.Provider value={{user,setus,ready,setready}}> {children}</usercontext.Provider>
    )
}