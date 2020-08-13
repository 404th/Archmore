import React from 'react'
import './gallery.css'

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
          {/* SLIDER */}
          <div style={{ zIndex: '-1' }} >
            <div uk-slider='true' >
              <ul className="uk-slider-items uk-child-width-1-4@s uk-child-width-1-4@m uk-grid">
                <li>
                  <img src="./images/img/gallery/img-01.svg" width="100%" height="100%" alt="home-1" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-02.svg" width="100%" height="100%" alt="home-2" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-03.svg" width="100%" height="100%" alt="home-3" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-01.svg" width="100%" height="100%" alt="home-1" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-02.svg" width="100%" height="100%" alt="home-2" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-03.svg" width="100%" height="100%" alt="home-3" />
                </li>
              </ul>
              
              <div className="uk-visible@s nav_covers">
                <div className="previous">
                  <a href="#" uk-slidenav-previous='true' uk-slider-item="previous">
                    <img src="./images/img/gallery/dashicons_arrow-left-alt.svg" width="20px" alt='left' />
                  </a>
                </div>
                <div className="next" >
                  <a href="#" uk-slidenav-next='true' uk-slider-item="next">
                    <img src="./images/img/gallery/dashicons_arrow-right-alt.svg" width="20px" alt='right' />
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    
  )
}

export default Gallery