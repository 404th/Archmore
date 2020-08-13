import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app'
// import "normalize.css"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import combiner from './components/reducers/Combiner'

const createStoreByMiddleware = applyMiddleware()( createStore )

ReactDOM.render(
    <Provider store={createStoreByMiddleware( combiner )}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
)
