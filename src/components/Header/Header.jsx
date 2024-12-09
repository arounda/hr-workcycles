'use client';

import React, { useEffect, useState } from 'react';
import s from './header.module.scss';

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import Burger from './Burger/Burger';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

const Header = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ isHeaderWhite, setIsHeaderWhite ] = useState(false);


  useEffect(() => {
    if (window.scrollY > 50) {
      setIsHeaderWhite(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.scrollY < 50) {
      setIsHeaderWhite(false);
    } else {
      setIsHeaderWhite(true);
    }
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
          <HeaderLogo isHeaderWhite={isHeaderWhite} />

          <div className={s.headerMain}>
            <HeaderNavigation
              isMenuOpen={isMenuOpen}
              isHeaderWhite={isHeaderWhite}
            />

            <div className={s.headerCTAs}>
              <ButtonSecondary
                text='Client Login'
                link='#'
                isHeaderWhite={isHeaderWhite}
              />

              <ButtonPrimary
                text='New Hire Login'
                link='#'
                isHeaderWhite={isHeaderWhite}
              />
            </div>

            <div className={s.headerBurgerWrapper}>
              <Burger
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                isHeaderWhite={isHeaderWhite}
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