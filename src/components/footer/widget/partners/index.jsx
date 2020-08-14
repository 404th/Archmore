import React from 'react'
import PartnerItem from './Partners_item'

const Partners = props => {
  return (
    <div className="partners">
      { props.partners ? props.partners.map( (partner,i) => {
        return <PartnerItem info={partner} key={i} />
      } ) : null }
    </div>
  )
}

export default Partners