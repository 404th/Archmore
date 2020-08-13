import React from 'react'
import SliderItem from './SliderItem'
const Slider = props => {

  return(
    <div style={{ zIndex: '-1' }} >
      <div uk-slider='true' >
        <ul className="uk-slider-items uk-child-width-1-4@s uk-child-width-1-4@m uk-grid">
          <SliderItem />
          {/* <li>
            <img src="./images/img/gallery/img-01.svg" width="100%" height="100%" alt="home-1" />
          </li>
           */}
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
  )

}

export default Slider