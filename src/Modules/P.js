import React from 'react';
import styled from 'styled-components';

const fontSize = 30;

const Message = styled.p`
  font-size: ${fontSize}px;
  color: black;
`;

const MessageWarning = styled(Message)`
  color: red;
`;


export default () => {
  return(
    <React.Fragment>
      <Message>module</Message>
      <MessageWarning>warning</MessageWarning>
    </React.Fragment>
  );
};