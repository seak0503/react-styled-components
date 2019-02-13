import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  test-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default () => {
  return(
    <Wrapper>
      <Title>
        Hello World!
      </Title>
    </Wrapper>
  );
}