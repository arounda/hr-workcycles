import logoBlack from '@/assets/header-logo-black.svg';
import logoWhite from '@/assets/header-logo.svg';
import Image from 'next/image';
import styled from 'styled-components';

const StyledHeaderLogo = styled.a`
  position: relative;

  & .logoBlack {
    position: absolute;
    inset: 0;
    opacity: ${({ $isHeaderWhite }) => (
      $isHeaderWhite ? '1' : '0'
    )}
  }
`;

const HeaderLogo = ({ isHeaderWhite }) => {
  return (
    <StyledHeaderLogo
      href='/'
      $isHeaderWhite={isHeaderWhite}
    >
      <Image
        src={logoWhite}
        alt=''
      />

      <Image
        className='logoBlack'
        src={logoBlack}
        alt=''
      />
    </StyledHeaderLogo>
  )
}

export default HeaderLogo