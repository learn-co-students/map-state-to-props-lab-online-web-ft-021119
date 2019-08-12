import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {
  renderArray = () => {
    return this.props.users.map(user => <li>{user.username}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderArray()}
        </ul>
        {this.props.users.length}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
