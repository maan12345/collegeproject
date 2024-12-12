import {useParams} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import Bookingbox from './Bookingbox.js'
import {useEffect} from 'react'
import Imagegall from './Imagegall.js'
import Locationma from './Locationma.js'
function Speciplacepage(){
    const {id}=useParams()
    const [place,setplace]=useState(null)
    const [showphoto,setallphoto]=useState(false)
    useEffect(function(){
        if(!id){
            return
        }
        axios.get('http://localhost:4000/app/v1/specipage/'+id).then(response => {
            setplace(response.data?.data)
        })
    },[id])

    if(!place){
        return ''
    }
    function closphoto(){
        setallphoto(false)
    }
    function photoall(){
        setallphoto(true)
    }
    return(
        <div className='mt-4 bg-gray-100 -mx-8 px-8 pt-8'>
            <h1 className='text-3xl'> {place.title}</h1>
             <Locationma place={place}></Locationma>
            <Imagegall place={place}></Imagegall>
            <div className='grid grid-cols-1 mt-8 mb-8 gap-8 md:grid-cols-[2fr_1fr]'>
                <div>
                <div className='my-4'>
                <h2 className='font-semibold text-2xl'>description</h2>
                {place.description}
            </div>
            <div>
                    checkin: {place.checkin}<br></br>
                    checkout: {place.checkout}<br></br>
                    Max no of guest: {place.maxguest}
                    </div>
                </div>
                <div>
                    <Bookingbox place={place}></Bookingbox>
                    </div>
            </div>
            <div className='bg-white -mx-8 px-8 py-8 border-t'>
            <div>
                <h2 className='font-semibold text-2xl'>Extra info</h2>
            </div>
            <div className='text-sm text-gray-500 leading-4 mb-4 mt-2'> {place.extrainfo}</div>
            </div>
        </div>
    )
}
export default Speciplacepage