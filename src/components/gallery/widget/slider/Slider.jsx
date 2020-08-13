import React, { useEffect } from 'react'
import SliderItem from './SliderItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSliderImgs } from '../../../actions'

const Slider = props => {

  console.log( 'Slider props:' + props );

  useEffect( () => {
    props.setSliderImgs()
  },[] )

  return(
    <div style={{ zIndex: '-1' }} >
      <div uk-slider='true' >
        <ul className="uk-slider-items uk-child-width-1-4@s uk-child-width-1-4@m uk-grid">
          <SliderItem />
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

const mapStateToProps = state => {
  console.log( 'mapState:' + state ); 
  return {
    imgs: ''
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setSliderImgs
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)( Slider )