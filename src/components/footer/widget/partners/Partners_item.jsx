import React from 'react'

const PartnerItem = props => (
  <div>
    <img {...props.info} alt={ props.info.alt } />
  </div>
)

export default PartnerItem