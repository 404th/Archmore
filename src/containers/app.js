import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Routes from '../routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { setSliderImgs } from '../components/actions'
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

const mapStateToProps = state => {
  return {
    info: ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSliderImgs: () => {
      dispatch(setSliderImgs())
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(App)