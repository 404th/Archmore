import React from 'react'
import {NavLink} from 'react-router-dom'

const SignIn = props => {

  return(
    <NavLink { ...props }>
      <span> { props.title } </span>
    </NavLink>
  )
}

export default SignIn