import React from 'react';
import styled from 'styled-components';

const InputModule = styled.input.attrs({
  type: 'text',
  size: props => props.small ? 3 : 8
})`
  color: white;
  background: black;
`;

export default (props) => {
  return(
    <InputModule small={props.small} />
  );
}