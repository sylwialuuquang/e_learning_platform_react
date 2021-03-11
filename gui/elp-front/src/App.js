import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './containers/Layout'
import BaseRouter from './routes'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <BaseRouter />
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
