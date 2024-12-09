'use client';

import styled from 'styled-components';

const StyledButtonPrimary = styled.a`
  min-width: 160px;
  min-height: 50px;
  padding: 10px 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'var(--primary)' : 'var(--white)'
  )};
  border: 1px solid var(--white);
  border-color: ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'var(--primary)' : 'var(--white)'
  )};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color:  ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'var(--white)' : 'var(--black)'
  )};
  transition: var(--btn-hover-transition);

  &:hover {
    color: ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'var(--primary)' : 'var(--white)'
  )};
    background-color: ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'transparent' : 'transparent'
  )};
  }
`;

const ButtonPrimary = ({ text, link, isHeaderWhite }) => {
  return (
    <StyledButtonPrimary
      href={link}
      $isHeaderWhite={isHeaderWhite}
    >
      {text}
    </StyledButtonPrimary>
  )
}

export default ButtonPrimary