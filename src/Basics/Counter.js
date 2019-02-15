import React from 'react';
import styled from 'styled-components';

const StyeldCounter = styled.div`
  maring: 10px;
`;

const Paragraph = styled.p`
  color: tomato;
`;

const Button = styled.button`
  border-color: tomato;
`;

export default class Counter extends React.Component {
  state = { count: 0 }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return(
      <StyeldCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </StyeldCounter>
    );
  }
}