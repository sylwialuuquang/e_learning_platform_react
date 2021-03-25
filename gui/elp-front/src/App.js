import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from './containers/Layout'
import BaseRouter from './routes'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Layout {...this.props}>
            <BaseRouter />
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token != null,
    user_id: state.user_id,
    user_first_name: state.user_first_name
  }
}

export default connect(mapStateToProps)(App);
