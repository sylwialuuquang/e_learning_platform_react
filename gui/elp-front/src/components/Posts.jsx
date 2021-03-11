import React, { Component } from 'react';


class Posts extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="shadow-sm p-3 border bg-light">
                <h3>Posts</h3>
                This is author and time
                <br/>
                This is post content
                <hr />
                This is author and time
                <br/>
                This is post content
                <hr />
                This is author and time
                <br/>
                This is post content
            </div>
         );
    }
}
 
export default Posts;