import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.props.users.map((user, i) => <li key={i}>{user.username}</li>)}
            {this.props.userCount}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {users: state.users, userCount: state.users.length}
}
//add mapStateToProps here

export default connect(mapStateToProps)(Users)
