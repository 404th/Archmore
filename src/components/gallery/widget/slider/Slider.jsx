import React, { useEffect } from 'react'
import SliderItem from './SliderItem'
import { connect } from 'react-redux'
import { setSliderImgs } from '../../../actions'
import SliderNav from './SliderNav'

const Slider = props => {
  useEffect( () => {
    props.getSliderImgs()
  },[] )

  return(
    <div style={{ zIndex: '-1' }} >
      <div uk-slider='true' >
        <ul className="uk-slider-items uk-child-width-1-4@s uk-child-width-1-4@m uk-grid">
          { props.imgs ? props.imgs.map( (item, i) => {
            return <SliderItem {...item} key={i} />
          } ) : null }
        </ul>
        { props.imgs && props.imgs.length > 4 ?
            <SliderNav />
        : null
        }

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    imgs: state.Slider_reducer.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSliderImgs: () => {
      dispatch( setSliderImgs() )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps )( Slider )