import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user) => {
            return <li>{user.username}, {user.hometown}</li>
          })}
        </ul>
        Users count: {this.props.users_count}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({users: state.users, users_count: state.users.length})
}

export default connect(mapStateToProps)(Users);
