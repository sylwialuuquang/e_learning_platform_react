import React, { Component } from 'react';
import axios from 'axios'

import CourseList from '../containers/CourseList'
import PostList from '../containers/PostList'

class TeamView extends Component {
    state = { 
        team: null 
    }

    componentDidMount() {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/viewer/teams/',
        headers: {
            Authorization: 'Token ' + localStorage.getItem('token')
        }
      })
      .then(response => {
        this.setState({ team: response.data })
      })
    }

    render() { 
      const params = {
        view: "teamview"
      }
      return ( 
          <React.Fragment>
              <div className="container px-4" id="team-view">
                {this.state.team ?

                <h1>Class {this.state.team.year_start}{this.state.team.symbol}</h1>

                :

                <h1>Loading...</h1>
                }
                <div className="row gx-5">
                  <div className="col-8">
                    <PostList params={params}/>
                  </div>
                  <div className="col">
                    <CourseList params={params}/>
                  </div>
                </div>
              </div>
          </React.Fragment>
       );
    }
}
 
export default TeamView;