import props from 'react'
import {differenceInCalendarDays} from 'date-fns'
import {Navigate} from 'react-router-dom'
import {usercontext} from '../Usercontext.js'
import {useContext} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'
function Bookingbox(props){
    const place=props.place
    const [checkin,setcheckin]=useState()
    const [checkout,setcheckout]=useState()
    const [noofguest,setnoofguest]=useState()
    const [name,setname]=useState()
    const [phonenumber,setphonenumber]=useState()
    const [direct,setdirect]=useState()
    const {user}=useContext(usercontext)
    const [numberofDA,setnumberofDA]=useState(0)
    useEffect(function(){
        if(user){
            setname(user.name)
        }
    },[user])
    useEffect(function(){
        if(checkin && checkout){
        const numberday=differenceInCalendarDays(new Date(checkout),new Date(checkin))
        setnumberofDA(numberday)
        }
    },[checkin,checkout])
    function checkintime(b){
        b.preventDefault()
        setcheckin(b.target.value)
    }
    function checkouttime(b){
        setcheckout(b.target.value)
    }
    function noguest(b){
        console.log(noofguest)
        setnoofguest(b.target.value)
    }
    function namecust(b){
        setname(b.target.value)
    }
    function phonecust(b){
        setphonenumber(b.target.value)
    }
    //let numberday=0;
    //if(checkin && checkout){
    //    numberday=differenceInCalendarDays(new Date(checkin),new Date(checkout))
    //    setnumberofDA(numberday)
    //}
    async function customerda(){
        try{
        const userdata={name:name,phoneno:phonenumber,checkin:checkin,checkout:checkout,noofguest:noofguest,place:place._id,price:numberofDA * place.price}
        const resdata=await axios.post('http://localhost:4000/app/v1/custin',userdata)
        const custid=resdata.data?.data?._id
        console.log(resdata)
        console.log(resdata?.data)
        console.log(custid)
        setdirect('/account/booking/'+custid)
    }
    catch(err){
        alert('please try again')
    }
    }
    if(direct){
      return <Navigate to={direct}></Navigate>
    }
    return(
        <div className='bg-white shadow p-4 rounded-2xl'>
                        <div className='text-2xl text-center'>
                        Price: ${place.price} / per night
                        </div>
                        <div className='border rounded-2xl mt-4'>
                            <div className='flex'>
                        <div className='py-3 px-4'>
                            <label> checkin</label>
                            <input type='date' onChange={checkintime} value={checkin}></input>
                        </div>
                        <div className='py-3 px-4 border-l'>
                            <label>checkout</label>
                            <input type='date' onChange={checkouttime} value={checkout}></input>
                        </div>
                        </div>
                        <div className='py-3 px-4 border-t'>
                       <label> no of guest</label>
                       <input type='number' onChange={noguest} value={noofguest}></input>
                        </div>
                        {numberofDA>0 && (
                            <div  className='py-3 px-4 border-t'>
                            <label> your full name</label>
                            <input type='text' placeholder='your name' value={name} onChange={namecust}></input>    
                                <label> your phone number</label>
                                <input type='tel' placeholder='' value={phonenumber} onChange={phonecust}></input>
                            </div>
                        )}
                        </div>
                        <button className='primary mt-4' onClick={customerda}>
                        book this place
                        {numberofDA>0 && (
                            <div>
                            <span> ${numberofDA * place.price}</span>
                            </div>
                        )}
                        </button>
                    </div>
    )
}
export default Bookingbox