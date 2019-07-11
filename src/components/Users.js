import React, { Component } from 'react';
import {connect } from 'react-redux'


class Users extends Component {


  render() {
    // debugger 
    return (
      <div>
        Total Users: {this.props.users.length}
        <br/>
        <ul>
          {this.props.users.map(user => {
            return(
            <li>{user.username} <br/>
                {user.hometown}
                <br/>
            </li>)
          })}
        </ul>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return{
    users: state.users
  }
}
//add mapStateToProps here

export default connect(mapStateToProps)(Users)

