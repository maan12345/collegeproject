import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Perk from './perk.js'
import {useState} from 'react'
import axios from 'axios'
import Photouploader from './Photouploader.js'
import {Navigate} from 'react-router-dom'
import {useEffect} from 'react'
import Accountnav from './Accountnav.js'
function Placepageform(){
    //const {action}=useParams()
    const [title,settitle]=useState('')
    const [address,setadress]=useState('')
    const [description,setdescription]=useState('')
    const [perk,setperk]=useState([])
    const [addphoto,setaddedphoto]=useState([])
    const [photolink,setphotolink]=useState('')
    const [extrainfo,setextrainfo]=useState('')
    const [checkin,setcheckin]=useState('')
    const [checkout,setcheckout]=useState('')
    const [maxguest,setmaxguest]=useState(1)
    const [direct,setdirect]=useState(false)
    const [price,setprice]=useState()
    const {id}=useParams()
    //console.log(action)
    console.log(id)
    useEffect(function(){
        if(!id){
           return;
        }
        axios.get('http://localhost:4000/app/v1/place/'+id).then(res=>{
           const data=res.data?.data
           console.log(data)
           settitle(data.title)
           setadress(data.address)
           setprice(data.price)
           setaddedphoto(data.photos)
           setdescription(data.description)
           setperk(data.perks)
           setextrainfo(data.extrainfo)
           setcheckin(data.checkin)
           setcheckout(data.checkout)
           setmaxguest(data.maxguest)
        })
       },[id])
    function inputHeader(text){
        return <h2 className='text-2xl bt-4'>{text}</h2>
    }
    function inputdescription(text){
        return <p className='text-gray-500 text-sm'>{text}</p>
    }
    function preinput(header,description){
        return(
            <div>
                {inputHeader(header)}
                {inputdescription(description)}
            </div>
        )
    }
    async function addnewplace(b){
         b.preventDefault()
         if(id){
            const data={title:title,address:address,price:price,description:description,perk:perk,addphoto:addphoto,photolink:photolink,extrainfo:extrainfo,checkin:checkin,checkout:checkout,maxguest:maxguest}
            const savedata=axios.put('http://localhost:4000/app/v1/update',{
                id,data
            })
         }
         else if(!id){
         const data={title:title,address:address,price:price,description:description,perk:perk,addphoto:addphoto,photolink:photolink,extrainfo:extrainfo,checkin:checkin,checkout:checkout,maxguest:maxguest}
         const savedata=await axios.post('http://localhost:4000/app/v1/listplace',data)
         }
         setdirect(true)
    }
    if(direct){
        return <Navigate to={'/account/place'}></Navigate>
    }
    function changeprice(b){
      setprice(b.target.value)
    }
    return(
                <div>
                    <Accountnav></Accountnav>
                <form onSubmit={addnewplace}>
                <h2 className='text-2xl mt-4'>
                title
                 </h2>
                 <p className='text-gray-500 text-sm'> title for your place should be short and catchy as in advertisement</p>
                <input type='text' placeholder='title,for example for my lovely apartment' value={title} onChange={function(b){
                     settitle(b.target.value)
                }}></input> 
                <h2 className='text-2xl mt-4'>  Address</h2>   
                <p className='text-gray-500 text-sm'> Address to this place</p>
                <input type='text' placeholder='address' value={address} onChange={function(b){
                    setadress(b.target.value)
                }}></input>
                <Photouploader addphoto={addphoto} setaddedphoto={setaddedphoto} photolink={photolink} setphotolink={setphotolink}></Photouploader>
                <h2 className='text-2xl mt-4'> description</h2>
                <p className='text-gray-500 text-sm'> description of the place</p>
                <textarea value={description} onChange={function(b){
                     setdescription(b.target.value)
                }}> </textarea>
                <h2 className='text-2xl mt-4'> Perks</h2>
                <p className='text-gray-500 text-sm'> select all the perks</p>
                <div> <Perk selected={perk} onChange={setperk}> </Perk></div>
                <h2> </h2>
                <h2 className='text-2xl mt-4'> extra info</h2>
                <p className='text-gray-500 text-sm'> house rules,etc</p>
                <textarea value={extrainfo} onChange={function(b){
                    setextrainfo(b.target.value)
                }}></textarea>
                <h2 className='text-2xl mt-4'> checkin&out time,maxguest</h2>
                <p className='text-gray-500 text-sm'> add check in and out time, remember to have some time window for cleaning the room between guest</p>
                <div className='grid gap-2 grid-cols-2 md:grid-cols-4'>
                    <div>
                        <h3 className='mt-2 -mb-1'> check in time</h3>
                        <input type='text' placeholder='14:00' value={checkin} onChange={function(b){
                            setcheckin(b.target.value)
                        }}></input>
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1'> check out time</h3>
                        <input type='text' value={checkout} onChange={function(b){
                            setcheckout(b.target.value)
                        }}></input>
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1'> max no of guests</h3>
                        <input type='number' value={maxguest} onChange={function(b){
                            setmaxguest(b.target.value)
                        }}></input>
                    </div>
                    <div>
                        <h3 className='mt-2 mb-1'> price per night</h3>
                        <input type='number' value={price} onChange={changeprice}></input>
                    </div>
                </div>
                <div>
                    <button className='primary my-4'>Save</button>
                </div>
                </form>
            </div>
    )
}
export default Placepageform