import React, { Component } from 'react';
import axios from 'axios'

import Lesson from '../components/Lesson'

class LessonList extends Component {
    state = { 
        lessons: []
     }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/viewer/lessons/',
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token')
            },
            params: {
                course_id: this.props.course_id
            }
        })
        .then(response => {
            this.setState({ lessons: response.data })
        })
    }

    render() { 
        return ( 
            <div className="shadow-sm p-3 border bg-light">
                <h3>Lessons</h3>
                {this.state.lessons.map(lesson => (
                    <Lesson key={lesson.id} lesson={lesson}/>
                ))}
            </div>
         );
    }
}
 
export default LessonList;