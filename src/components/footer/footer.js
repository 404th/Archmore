import React, { useEffect } from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import Partners from './widget/partners'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setPartners } from '../actions'

const Footer = props => {
  useEffect( () => {
    props.setPartners()
  }, [] )
  return (
    <div className="footer_container">
      <div className="footer_container_cover">
        <div className="footer_container_cover_child1">
          <div className="word">
            <span>Our partners</span>
          </div>
          <Partners partners={props.partners} />
        </div>
        <div className="footer_container_cover_child2">
          <div className="footer_navigator">
            <Link to={'/#'} >About us</Link>
            <Link to={'/#'} >How it works</Link>
            <Link to={'/#'} >FAQ</Link>
            <Link to={'/#'} >Contact us</Link>
            <Link to={'/#'} >Privacy Police</Link>
          </div>
          <div className="footer_logo">
            <Link to={'/'} >
              <img src="./images/img/footer/1.svg" alt='logo' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    partners: state.Slider_reducer.partners
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setPartners
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )( Footer )