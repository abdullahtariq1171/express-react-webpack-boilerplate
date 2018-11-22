import React from 'react'
import ReactDOM from 'react-dom'

const App = () =>
  <div>
    <h2> hello from ReactApp </h2>
    <h4> edit src/index.js </h4>
  </div>;

ReactDOM.render(
  <App /> ,
  document.getElementById('root') // eslint-disable-line no-undef
);

if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef  
  // Needed for Hot Module Replacement
  module.hot.accept() // eslint-disable-line no-undef  
}
