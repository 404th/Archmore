import React from 'react'

const Gallery = () => {

  return(


    <div className="gallery_container" >

      <div className="gallery_container_cover" >
        <div className="gallery_container_cover_child1" >
          <p>Build professional valuable room for you</p>
        </div>
        <div className="gallery_container_cover_child2" >
          <div style={{ zIndex: '-1' }} >
            <div uk-slider='true' >
              <ul className="uk-slider-items uk-child-width-1-5@s uk-child-width-1-5@m uk-grid">
                <li>
                  <img src="./images/img/gallery/img-01.svg" alt="home-1" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-02.svg" alt="home-2" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-03.svg" alt="home-3" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-04.svg" alt="home-4" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-01.svg" alt="home-1" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-02.svg" alt="home-2" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-03.svg" alt="home-3" />
                </li>
                <li>
                  <img src="./images/img/gallery/img-04.svg" alt="home-4" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
       {/* SLIDER */}
      

    </div>

    
  )
}

export default Gallery