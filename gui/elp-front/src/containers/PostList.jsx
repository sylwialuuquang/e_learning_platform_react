import React, { Component } from 'react';
import axios from 'axios'

import Post from '../components/Post'


class PostList extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/viewer/posts/',
            headers: {
                Authorization: 'Token ' + localStorage.getItem("token"), 
            },
            params: this.props.params
        })
        .then(response => {
            this.setState({
                posts: response.data
            })
        })
    }

    render() { 
        return ( 
            <div className="shadow-sm p-3 border bg-light">
                <h3>Posts</h3>
                {this.state.posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
         );
    }
}
 
export default PostList;