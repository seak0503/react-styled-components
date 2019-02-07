import React from 'react';
import styled from 'styled-components';

const fontSize = size => {
  return size === 'big' ? '42px' : '24px';
}

const Message = styled.a`
  font-size: ${props => fontSize(props.size)};
  background: yellow;
  color: black;

  &:hover {
    color: red;
  }

  &::before {
    content: '◾️';
  }

  @media (max-width: 600px) {
    background: tomato;
  }
`

export default (props) => {
  return(
    <Message size={props.fontSize}>module2</Message>
  );
};