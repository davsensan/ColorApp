import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import storeFactory from './redux/store'

const store = storeFactory()
console.log(store)
window.React = React
window.store = store

ReactDOM.render(
	<App
	store={store}/>,
		document.getElementById('root')
)

