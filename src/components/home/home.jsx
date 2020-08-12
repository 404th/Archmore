import React from 'react'
import './homeee.css'

const Home = () => {
  
  return(
    <div className="home_container" >
      <div className="home_container_cover" >
        <div className="home_container_cover_first" >
          <h1> Build Your </h1>
          <h1> Dream <span> House </span> </h1>
        </div>
        <div className="home_container_cover_second" >
          <div className="home_container_cover_second_child1">

            <div className="home_container_cover_second_child1_1">
              <p>The first and most trusted marketplace of design build house in The World.
                100% guaranteed Build safe, comfortable and transparent with a project management
                for the best result
              </p>
            </div>
            
            <div className="home_container_cover_second_child1_2">
              <span>Free Consultation</span>
            </div>

          </div>

          <div className="home_container_cover_second_child2">
            <img src="./images/img/home/homepage1.svg" width={765} height={480} alt="home" />
          </div>

        </div>
      </div>
    </div>
  )

}

export default Home