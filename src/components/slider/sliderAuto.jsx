import { useEffect, useState } from 'react';
import leftImg from '../../assets/left-arrow.svg';
import rightImg from '../../assets/right-arrow.svg';
import sliderData from '../../data/sliderData'
import './slider.css'
export  default function SliderAuto (){
//state
const [sliderIndex, setSliderIndex] = useState(1)


//comportement
 const toggleImage = (indexPayload) =>{
    let newState;
    // if(indexPayload + sliderIndex > sliderData.length){
    //     newState = 1
    // } else if(indexPayload + sliderIndex < 1){
    //     newState = sliderData.length
    // } else{
    //     newState = indexPayload + sliderIndex
    // }
    // setSliderIndex(newState)
    setSliderIndex(state => {
        if(indexPayload + state > sliderData.length){
            return 1
        } else if( indexPayload + state < 1) {
            return sliderData.length
        } else {
            return state + indexPayload
        }
    })
 }

 useEffect(()=>{
    const intervalId = setInterval(()=>
        toggleImage(1),2000)
    return () => clearInterval(intervalId)
 },[])
//render
return(
    <>
    
          <p className="index-info">{sliderIndex}/{sliderData.length}</p> 
          <div className="slider">
          <p className="image-info">{sliderData.find(data=>data.id === sliderIndex).description}</p> 
          <img src={`/images/img-${sliderIndex}.jpg`} alt='blabla' className="slider-img"></img>
          <button className="navigation-button prev-button" onClick={()=>toggleImage(-1)}><img src={leftImg} alt='loeem'></img></button> 
          <button className="navigation-button next-button" onClick={()=>toggleImage(1)}><img src={rightImg} alt='loeem'></img></button>
       </div>
     
    </>
)
}