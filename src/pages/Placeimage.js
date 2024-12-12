import props from 'react'
function Placeimage(props,index=0){
    const place=props.place
    console.log(place)
    console.log(place.photos)
    console.log(place.photos[0])
    console.log(place.photos?.[0])
    if(!place.photos?.length){
        return ''
    }
    return(
        <div>
        {place.photos.length>0 && (
            <img className='object-cover' src={'http://localhost:4000/upload/'+place.photos[0]}></img>
        )}
        </div>
    )
}   
export default Placeimage