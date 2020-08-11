import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Routes from '../routes'
import { BrowserRouter as Router } from 'react-router-dom'

const App = props => {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </div>
  )
}

export default App