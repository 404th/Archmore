import React, { useEffect } from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import Partners from './widget/partners'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setPartners, setFootLink } from '../actions'
import FNav from './widget/navlinks'

const Footer = props => {
  useEffect(() => {
    props.setPartners()
    props.setFootLink()
  }, [])

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
          <FNav nav={ props.footerNav } />
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
    partners: state.Slider_reducer.partners,
    footerNav: state.Slider_reducer.footerNav,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setPartners,
    setFootLink
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )( Footer )