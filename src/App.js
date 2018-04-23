import React, { Component } from 'react';
import UserInput from './components/UserInput';
//Found some comments in the components/Users.js
import {ConnectedUsers} from './components/Users';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        {/* is there something we could connect to here? */}
        <ConnectedUsers/>
      </div>
    );
  }
}

export default App;
