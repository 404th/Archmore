import React from 'react'

const Search = props => {
  return(
    <div className={props.className}>
      <img
        src={ props.tools.src }
        alt={props.tools.alt}
        width={props.tools.width}
        height={props.tools.height}
      />
    </div>
  )
}

export default Search