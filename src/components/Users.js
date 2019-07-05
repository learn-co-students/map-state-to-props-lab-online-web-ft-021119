import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((u, i) => <li key={i}>{u.username}</li>)}
          {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
	return {users: state.users,
		numberOfUsers: state.users.length
	};
}

export default connect(mapStateToProps)(Users);
