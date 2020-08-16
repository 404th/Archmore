import React from 'react'
import { Switch, Route } from 'react-router-dom'
//COMPONENTS
import Home from './components/home/home'
import Error from './components/error/error'
import Gallery from './components/gallery/gallery'
import SignIn from './components/signIn/signIn'
import SignUp from './components/signUp/signUp'

const Routes = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route component={Error} />
      </Switch>
    </div>
  )

}

export default Routes