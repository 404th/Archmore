import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Routes from '../routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

const App = () => {

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

export default connect(null, null)( App )