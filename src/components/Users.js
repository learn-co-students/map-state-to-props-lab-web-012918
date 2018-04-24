import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  makeUsers = () => {
    return this.props.users.map(user => <li>{user.userName} from {user.hometown}</li>)
  }

  render() {
    console.log(this.props.users);
    return (
      <div>
        <ul>
          {this.makeUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users)
