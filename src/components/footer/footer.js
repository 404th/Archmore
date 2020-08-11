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
              <img src="./images/img/footer/logo-1.svg" width="100%" heigh="100%" />
            </div>
            <div>
              <img src="./images/img/footer/logo-2.svg" width="100%" heigh="100%" />
            </div>
            <div>
              <img src="./images/img/footer/logo-3.svg" width="100%" heigh="100%" />
            </div>
            <div>
              <img src="./images/img/footer/logo-4.svg" width="100%" heigh="100%" />
            </div>
            <div>
              <img src="./images/img/footer/logo-5.svg" width="100%" heigh="100%" />
            </div>
          </div>
        </div>
        <div className="footer_container_cover_child2">
          <div className="footer_navigator">
            <Link>About us</Link>
            <Link>How it works</Link>
            <Link>FAQ</Link>
            <Link>Contact us</Link>
            <Link>Privacy Police</Link>
          </div>
          <div className="footer_logo">
            <Link>
              <img src="./images/img/footer/1.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer