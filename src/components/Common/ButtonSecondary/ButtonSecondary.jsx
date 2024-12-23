import Link from 'next/link';
import styled from 'styled-components';

const StyledButtonSecondary = styled.div`
  min-width: 160px;
  min-height: 50px;
  padding: 10px 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid;
  border-color: ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'var(--primary)' : 'var(--white)'
  )};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'var(--primary)' : 'var(--white)'
  )};
  transition: var(--btn-hover-transition);

  &:hover {
    color: ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'var(--white)' : 'var(--primary)'
  )};
    background-color: ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'var(--primary)' : 'var(--white)'
  )};
  }
`;

const ButtonSecondary = ({ text, link, isHeaderWhite }) => {
  return (
    <Link href={link}>
      <StyledButtonSecondary $isHeaderWhite={isHeaderWhite}>
        {text}
      </StyledButtonSecondary>
    </Link>
  )
}

export default ButtonSecondary