import React from 'react'
import './gallery.css'
import Slider from './widget/slider/Slider'

const Gallery = () => {

  return(


    <div className="gallery_container" >

      <div className="gallery_container_cover" >
        
        <div className="gallery_container_cover_child1" >
          <div>
            <span>Build professional valuable room for you</span>
          </div>
        </div>
        
        <div className="gallery_container_cover_child2" >
          <Slider />
        </div>

      </div>

    </div>

    
  )
}

export default Gallery