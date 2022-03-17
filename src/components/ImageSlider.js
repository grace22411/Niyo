import React,{useState} from 'react'
import { SliderData } from '../helpers/Data'
import { ImageSliderSaved } from './styles'

const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0);
//const length = slides.length;

const nextSlider = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1 )
}

if(!Array.isArray(slides) || slides.length <= 0){
    return null;
}

console.log(current)

  return (
    <div>
        <ImageSliderSaved>
        {SliderData.map((item, index) => {
            return (
                
                <div className='image-saved' style={{backgroundImage:`url(${item.image})`}} key={index} onClick = {nextSlider}>
                </div>
                
            )
        })}
        </ImageSliderSaved>
    </div>
  )
}

export default ImageSlider;