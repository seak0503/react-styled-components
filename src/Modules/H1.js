import React from 'react';
import styled, { css } from 'styled-components';

const fontSize = css`
  font-size: ${props => props.size === 'big' ? '42px' : '24px'};
`;

const Message = styled.a`
  ${fontSize}
`;

export default (props) => {
  return(
    <Message size={props.fontSize}>module3</Message>
  );
}