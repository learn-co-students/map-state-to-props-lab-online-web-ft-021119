import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {


  render() {
    return (
      <div>
        <ol>
            {this.props.users.map((user,idx) =><li>{user.username} {user.hometown}</li>)}
        </ol>

        <div>Number of Users: {this.props.users.length}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      users: state.users
    };
}

export default connect(
  mapStateToProps
)(Users);
