import React, { Component } from 'react';

import Posts from '../components/Posts'
import Courses from '../components/Courses'

class TeamView extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container px-4" id="team-view">
                  <h1>Class 2020A</h1>
                  <div className="row gx-5">
                    <div className="col-8">
                     <Posts />
                    </div>
                    <div className="col">
                      <Courses />
                    </div>
                  </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default TeamView;