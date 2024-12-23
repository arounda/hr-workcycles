import logoBlack from '@/assets/header-logo-black.svg';
import logoWhite from '@/assets/header-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeaderLogo = styled.div`
  position: relative;

  & .logoBlack {
    position: absolute;
    inset: 0;
    opacity: ${({ $isHeaderWhite, $isHome }) => (
    $isHeaderWhite || !$isHome ? '1' : '0'
  )}
  }
`;

const HeaderLogo = ({ isHeaderWhite, isHome }) => {
  return (
    <Link href='/'>
      <StyledHeaderLogo
        $isHeaderWhite={isHeaderWhite}
        $isHome={isHome}
      >
        <Image
          src={logoWhite}
          alt=''
          priority
        />

        <Image
          className='logoBlack'
          src={logoBlack}
          alt=''
          priority
        />
      </StyledHeaderLogo>
    </Link>
  )
}

export default HeaderLogo