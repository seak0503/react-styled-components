import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = props => {
  return(
    <button {...props} children={props.children.split('').reverse()} />
  );
}

export default () => {
  return(
    <div>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <Button as="a" href="/">Link with Button styles</Button>
      <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
      <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
    </div>
  );
}