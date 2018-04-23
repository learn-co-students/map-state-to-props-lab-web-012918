import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {


  render() {
    let userList = this.props.users.map(user => <li>{user.userName}</li>)

    return (
      <div>
        <ul>
          {/* stuff should happen around here */}
          {userList}
        </ul>
      </div>
    )
  }
}

//export const ConnectedUsers = Users // aren't we supposed to be connecting something around here?
const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users)
