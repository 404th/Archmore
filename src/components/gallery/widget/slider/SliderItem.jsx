import React from 'react'

const SliderItem = props => {
  return(
    <li>
      <img {...props} alt={props.alt} />
    </li>
  )
}

export default SliderItem