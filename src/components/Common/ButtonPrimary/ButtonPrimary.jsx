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
    $isHeaderWhite ? 'var(--white)' : 'var(--primary)'
  )};
  transition: all var(--btn-hover-transition);

  & path {
    transition: all var(--btn-hover-transition);
  }

  &:hover path {
    stroke: var(--white);
  }

  &:hover {
    color: ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'var(--primary)' : 'var(--white)'
  )};
    background-color: ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'transparent' : 'transparent'
  )};
  }
`;

const ButtonPrimary = ({ text, link, isHeaderWhite, hasIcon = false }) => {
  return (
    <StyledButtonPrimary
      href={link}
      $isHeaderWhite={isHeaderWhite}
    >
      {text}

      {hasIcon && (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7L7 7M17 7V17" stroke="#2D34FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </StyledButtonPrimary>
  )
}

export default ButtonPrimary