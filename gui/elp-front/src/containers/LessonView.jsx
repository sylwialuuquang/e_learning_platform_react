import React, { Component } from 'react';
import axios from 'axios'


class LessonView extends Component {
    state = { lesson: null }
    componentDidMount() {
        const lessonID = this.props.match.params.lessonID
        axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/viewer/lessons/${lessonID}/`,
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token')
            },
        })
        .then(response => {
            this.setState({
                lesson: response.data
            })
        })
    }

    render() { 
        return (
            <React.Fragment>
                <div className="container px-4">
                    { this.state.lesson ?

                    <div className="container">
                        <h1>{this.state.lesson.course.name}</h1>
                        <h3>{this.state.lesson.name}</h3>
                        <div className="row gx-5">
                            <div className="col">
                                <div className="shadow-sm p-3 border bg-light">
                                    Description: {this.state.lesson.description}
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row gx-5">
                            <div className="col">
                                <div className="shadow-sm p-3 border bg-light">
                                    Files:
                                </div>
                            </div>
                        </div>
                    </div>
                                
                    :

                    <p>Loading...</p>
                    }
                </div>
            </React.Fragment>
        );
    }
}
 
export default LessonView;