import React, { Component } from 'react';
import styled from 'styled-components';

export default () => {
  const Link = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );

  const StyeldLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;

  return(
    <div>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyeldLink>Styled, exciting Link</StyeldLink>
    </div>
  );
}