import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  renderUsers = () => {
    return this.props.users.map(user => <li>{user.username}</li> )
  }

  render() {
    return (
      <div>
        <p>Total users: {this.props.users.length}</p>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
