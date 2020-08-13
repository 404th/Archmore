import React from 'react'
import './navbar-style.css'
import NavLinkk from './widget/Link'

const Navbar = () => {

  return (
    <div className={`container`} style={{ zIndex: '1' }} >
      <div className={"container_first"}>
        <div className={`container_first_child`} >
          <div className={"container_first_child_logo"}>
            <NavLinkk way={'/'} item={'img'} tools={
              { src: "./images/img/navbar/1.svg",
                alt: "site-logo",
                width: 60.57,
                height:28
              }} />
          </div>
          <div className={"container_second_child_navgation"}>

            <NavLinkk way={'/gallery'} title={'Gallery'} item={'span'} />
            <NavLinkk way={'#'} title={'List of Architect'} item={'span'} />
            <NavLinkk way={'#'} title={'Articles'} item={'span'} />
            <NavLinkk way={'#'} title={'How it works'} item={'span'} />
            
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