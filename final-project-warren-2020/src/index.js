import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import ScrollToTop from './components/ScrollToTop'

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>, document.getElementById('root'))


