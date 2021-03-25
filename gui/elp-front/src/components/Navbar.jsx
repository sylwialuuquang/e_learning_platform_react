import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../store/actions/auth'


class Navbar extends Component {

    handleLogout = (event) => {
      this.props.logout()
    }

    render() { 
        return ( 
          <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">ELP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                      this.props.isAuthenticated ?

                      <React.Fragment>
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Tests</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hi, {localStorage.getItem('first_name')}!
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">View Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" onClick={this.handleLogout} href="/">Logout</a></li>
                          </ul>
                        </li>
                      </React.Fragment>

                      :

                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/login/">Login</a>
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </nav>
          </React.Fragment>
         );
    }
}

const mapDispatchToProps = () => {
  return {
    logout: () => dispatchEvent(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(Navbar);