import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import storeFactory from './redux/store'

const store = storeFactory()

const render = () => ReactDOM.render(
  <App store={store}/>,
    document.getElementById('root')
)

store.subscribe(render)
render()