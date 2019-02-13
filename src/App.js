import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  test-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Hello World!
        </Title>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </Wrapper>
    );
  }
}

export default App;
