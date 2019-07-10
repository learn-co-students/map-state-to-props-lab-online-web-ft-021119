import React, { Component } from 'react';
import  {connect} from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
      {this.props.users.length}
        <ul>
          Users!

          {this.props.users.map(u =>(
        <li>{u.username}</li>

          ))}
        </ul>
      </div>
    )
  }
}
 const mapStateToProps = (state) => {
 return ({users: state.users})
 }


//add mapStateToProps here

export default connect(mapStateToProps)(Users);
