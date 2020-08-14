import React from 'react'
import { Link } from 'react-router-dom'

const FNav = props => {
  return (
    <div className="footer_navigator">

      { props.nav ? props.nav.map( (item, i) => {
        return <Link to={ item.to } key={i} >{ item.title }</Link>
        }) : null
      }

    </div>
  )
}

export default FNav