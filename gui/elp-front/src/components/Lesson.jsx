import React, { Component } from 'react';


class Lesson extends Component {
    render() { 
        return (
            <React.Fragment>
                <a href={`/lesson/${this.props.lesson.id}`}>{this.props.lesson.name}</a>
                <hr />
            </React.Fragment>
        );
    }
}
 
export default Lesson;