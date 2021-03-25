import React from 'react';
import { Route } from 'react-router-dom'

import LoginForm from './containers/Login'
import TeamView from './containers/TeamView'
import CourseView from './containers/CourseView'
import LessonView from './containers/LessonView'


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={null}/>
        <Route exact path='/team/' component={TeamView} />
        <Route exact path='/course/:courseID' component={CourseView}/>
        <Route exact path='/lesson/:lessonID' component={LessonView}/>
        <Route exact path='/login/' component={LoginForm} />
    </div>
)

export default BaseRouter