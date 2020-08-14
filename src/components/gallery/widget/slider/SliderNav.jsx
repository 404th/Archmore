import React from 'react'

export default () => (
  <div className="uk-visible@s nav_covers">
    <div className="previous">
      <a href="/prev" uk-slidenav-previous='true' uk-slider-item="previous">
        <img src="./images/img/gallery/dashicons_arrow-left-alt.svg" width="20px" alt='left' />
      </a>
    </div>
    <div className="next" >
      <a href="/next" uk-slidenav-next='true' uk-slider-item="next">
        <img src="./images/img/gallery/dashicons_arrow-right-alt.svg" width="20px" alt='right' />
      </a>
    </div>
  </div>
)