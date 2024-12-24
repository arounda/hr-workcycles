'use client';

import { useEffect, useState } from 'react';
import s from './header.module.scss';

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import Burger from './Burger/Burger';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import { clientLoginUrl, newHireLoginUrl } from '@/constants/buttonsLinks';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ isHeaderWhite, setIsHeaderWhite ] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (window.scrollY > 50) {
      setIsHeaderWhite(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  function handleScroll() {
    if (window.scrollY < 50) {
      setIsHeaderWhite(false);
    } else {
      setIsHeaderWhite(true);
    }
  }

  function handleMenuOpen(isOpen) {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    setIsMenuOpen(isOpen)
  }

  return (
    <header
      className={s.header}
      style={{
        boxShadow: `
          ${isHeaderWhite
            ? '2px 2px 20px 0px rgba(68, 102, 140, 0.07)'
            : '2px 2px 20px 0px rgba(68, 102, 140, 0)'
          }`
      }}
    >
      <div className="container">
        <div className={s.headerWrapper}>
          <HeaderLogo
            isHeaderWhite={isHeaderWhite}
            isHome={isHome}
          />

          <div className={s.headerMain}>
            <HeaderNavigation
              isMenuOpen={isMenuOpen}
              onMenuOpen={handleMenuOpen}
              isHeaderWhite={isHeaderWhite}
              isHome={isHome}
            />

            <div className={s.headerCTAs}>
              <ButtonSecondary
                text='Client Login'
                link={clientLoginUrl}
                isHeaderWhite={isHeaderWhite}
                isHome={isHome}
                isHeader={true}
              />

              <ButtonPrimary
                text='New Hire Login'
                link={newHireLoginUrl}
                isHeaderWhite={isHeaderWhite}
                isHome={isHome}
                isHeader={true}
              />
            </div>

            <div className={s.headerBurgerWrapper}>
              <Burger
                isMenuOpen={isMenuOpen}
                onMenuOpen={handleMenuOpen}
                isHeaderWhite={isHeaderWhite}
                isHome={isHome}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={s.headerBg}
        style={{
          opacity: `${isHeaderWhite ? '1' : '0'}`,
        }}
      ></div>
    </header>
  )
}

export default Header