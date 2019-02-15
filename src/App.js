import React, { Component } from 'react';
import {
  GettingStarted,
  AdaptingBasedOnProps,
  ExtendingStyles,
  StylingAnyComponents,
  PassedProps,
} from './Basics';
import Counter from './Basics/Counter';


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
        <h1>StylingAnyComponents</h1>
        <StylingAnyComponents />
        <h1>PassedProps</h1>
        <PassedProps />
        <h1>Counter</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
