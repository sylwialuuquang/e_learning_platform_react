import React, { Component } from 'react';



class Course extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <a href={`course/${this.props.course.id}`}>{this.props.course.name}</a>
                <p>{this.props.course.teacher.first_name} {this.props.course.teacher.last_name}</p>
                <hr />
            </React.Fragment>
         );
    }
}
 
export default Course;