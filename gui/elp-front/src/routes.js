import React from 'react';
import { Route } from 'react-router-dom'

import LoginForm from './containers/Login'
import TeamView from './containers/TeamView'


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={TeamView} />
        <Route exact path='/login/' component={LoginForm} />
    </div>
)

export default BaseRouter