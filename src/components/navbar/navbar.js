import React from 'react'
import './navbar-style.css'
import NavLinkk from './widget/Link'
import SignIn from './widget/SignIn'
import SignUp from './widget/SignUp'
import Search from './widget/Search'

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
          <Search
            className={"container_second_child_lupa"}
              tools={{ src:"./images/img/navbar/search.svg",
              alt:'Loopa',
              width: 16,
              height: 16
            }}
            item="img"
          />
          <SignIn className={"container_second_child_signIn"} title="Sign in" />
          <SignUp className={"container_second_child_signUp"} title="Sign up" />
          
        </div>
      </div>
    </div>
  )

}

export default Navbar