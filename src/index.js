import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app'
// import "normalize.css"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import combiner from './components/reducers/Combiner'

const createStoreByMiddleware = applyMiddleware()( createStore )

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreByMiddleware( combiner )}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
