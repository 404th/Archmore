import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Routes from '../routes'


const App = props => {

  return(
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App