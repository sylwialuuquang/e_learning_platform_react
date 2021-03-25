import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../store/actions/auth'


class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = { 
            username: '',
            password: ''
         }

         this.handleChangeUsername = this.handleChangeUsername.bind(this)
         this.handleChangePassword = this.handleChangePassword.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleChangeUsername(event) {
        this.setState({ username: event.target.value })
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value })
    }

    handleSubmit(event) {
        this.props.onAuth(this.state.username, this.state.password)
        this.props.history.push('/')
    }

    render() { 
        return ( 
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="usernameInput" className="form-label">Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername} className="form-control" id="usernameInput" aria-describedby="basic-addon1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword} className="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </React.Fragment>
         );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

 
export default connect(null, mapDispatchToProps)(LoginForm);