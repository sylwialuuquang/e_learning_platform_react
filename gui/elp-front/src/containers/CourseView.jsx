import React, { Component } from 'react';

import PostList from './PostList'
import LessonList from './LessonList'


class CourseView extends Component {
    render() { 
        const courseID = this.props.match.params.courseID
        const params = {
            view: "courseview",
            course_id: courseID
        }
        return ( 
            <React.Fragment>
                <div className="container px-4" id="course-view">
                    <h1>Math Course</h1>
                    <div className="row gx-5">
                        <div className="col-8">
                          <PostList params={params} />
                        </div>
                        <div className="col">
                          <LessonList course_id={courseID}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CourseView;