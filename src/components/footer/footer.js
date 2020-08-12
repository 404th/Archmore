import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_container_cover">
        <div className="footer_container_cover_child1">
          <div className="word">
            <span>Our partners</span>
          </div>
          <div className="partners">
            <div>
              <img src="./images/img/footer/logo-1.svg" width="100%" heigh="100%" alt='partner1' />
            </div>
            <div>
              <img src="./images/img/footer/logo-2.svg" width="100%" heigh="100%" alt='partner2' />
            </div>
            <div>
              <img src="./images/img/footer/logo-3.svg" width="100%" heigh="100%" alt='partner3' />
            </div>
            <div>
              <img src="./images/img/footer/logo-4.svg" width="100%" heigh="100%" alt='partner4' />
            </div>
            <div>
              <img src="./images/img/footer/logo-5.svg" width="100%" heigh="100%" alt='partner5' />
            </div>
          </div>
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

export default Footer