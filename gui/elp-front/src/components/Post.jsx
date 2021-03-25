import React, { Component } from 'react';


class Post extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <p>{this.props.post.author.first_name} {this.props.post.author.last_name} {this.props.post.published}
                <br />
                {this.props.post.content}</p>
                <hr />
            </React.Fragment>
         );
    }
}

export default Post;