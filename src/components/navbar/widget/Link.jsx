import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkk = props => {

  switch( props.item ){
    case( 'span' ):
      return (
        <NavLink to={props.way}>
         <span>{ props.title }</span>
       </NavLink>
      )
    case ('img'):
      return (
        <NavLink to={props.way} >
          <img src={ props.tools.src } alt={ props.tools.alt } height={ props.tools.height } width={ props.tools.width } />
        </NavLink>
      )
    default:
      return null

  }
}

export default NavLinkk