import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    // debugger
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li> {user.username} - {user.hometown} </li>)}
          {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  return {users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
