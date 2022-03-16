import React from 'react'
import { SliderData } from '../helpers/Data'
import ImageSlider from './ImageSlider'
import { CollectionContain, SavedCollection } from './styles'

const Collection = () => {
  return (
    <CollectionContain>
        <div className='header'>
            <h2>Your NFT Collection</h2>
        </div>

        <div className='recent'>
            <div className='first-shadow'></div>
            <div className='second-shadow'></div>
            <div className='the-recent-image'></div>
        </div>

        <SavedCollection >
        <div className='header'>
            <h2>Saved</h2>
        </div>
        <ImageSlider  slides ={SliderData}/>
        </SavedCollection>


        
    </CollectionContain>
  )
}

export default Collection