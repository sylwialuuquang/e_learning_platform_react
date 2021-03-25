import React, { Component } from 'react';
import axios from 'axios'

import Course from '../components/Course'


class CourseList extends Component {
    state = {
        courses: []
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/viewer/courses/',
            headers: {
                Authorization: 'Token ' + localStorage.getItem("token"), 
            },
            params: this.props.params
        })
        .then(response => {
            this.setState({
                courses: response.data
            })
        })
    }
    
    render() { 
        return (
            <div className="shadow-sm p-3 border bg-light">
                <h3>Courses</h3>
                {this.state.courses.map(course => (
                    <Course key={course.id} course={course}/>
                ))}
            </div>
        );
    }
}
 
export default CourseList;