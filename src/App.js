import React, { Component } from 'react';
import styled from 'styled-components';
import P from './Modules/P';
import A from './Modules/A';
import H1 from './Modules/H1';
import { Input } from './Modules';

class App extends Component {
  render() {
    return (
      <div>
        <P />
        <A fontSize="big"/>
        <div>
          <H1 fontSize="big" />
        </div>
        <div>
          <Input small={false} />
        </div>
      </div>
    );
  }
}

export default App;
