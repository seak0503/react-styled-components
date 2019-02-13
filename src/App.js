import React, { Component } from 'react';
import {
  GettingStarted,
  AdaptingBasedOnProps,
  ExtendingStyles,
} from './Basics';


class App extends Component {
  render() {
    return (
      <div>
        <h1>GettingStarted</h1>
        <GettingStarted />
        <h1>AdaptingBasedOnProps</h1>
        <AdaptingBasedOnProps />
        <h1>ExtendingStyles</h1>
        <ExtendingStyles />
      </div>
    );
  }
}

export default App;
