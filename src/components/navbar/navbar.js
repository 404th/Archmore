import React from 'react'
import './navbar-style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className={`container`}>
      <div className={"container_first"}>
        <div className={`container_first_child`} >
          <div className={"container_first_child_logo"}>
            <Link to={"/"}>
              <img
                src={"./images/img/navbar/1.svg"}
                alt="site-logo"
                width={60.57}
                height={28}
              />
            </Link>
          </div>
          <div className={"container_second_child_navgation"}>
            <Link to="#">
              <span>Design Gallery</span>
            </Link>
            <Link to="#">
              <span>List of Architect</span>
            </Link>
            <Link to="#">
              <span>Articles</span>
            </Link>
            <Link to="#">
              <span>How it works</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={`container_second`}>
        <div className={`container_second_child`}>
          <div className={"container_second_child_lupa"}>
            <img
              src={"./images/img/navbar/search.svg"}
              alt={"search"}
              width={16}
              height={16}
            />
          </div>
          <div className={"container_second_child_signIn"}>
            <span> Sign in </span>
          </div>
          <div className={"container_second_child_signUp"}>
            <span> Sign up </span>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Navbar