import React from 'react'
import ReactDOM from 'react-dom'

const App = () => <h2> hello gys this is me</h2>;

ReactDOM.render(
  <App /> ,
  document.getElementById('root') // eslint-disable-line no-undef
);

module.hot.accept() // eslint-disable-line no-undef 	// Needed for Hot Module Replacement
module.hot.accept() // eslint-disable-line no-undef
