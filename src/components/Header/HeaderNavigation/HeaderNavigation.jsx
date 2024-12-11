import styled from 'styled-components';
import s from './headerNavigation.module.scss';

const StyledLink = styled.a`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ $isHeaderWhite }) => (
    $isHeaderWhite ? 'var(--dark)' : 'var(--white)'
  )};
  transition: all var(--btn-hover-transition);
`;

const HeaderNavigation = ({
  isMenuOpen,
  setIsMenuOpen,
  isHeaderWhite
}) => {
  return (
    <nav className={s.headerNav}>
      <ul className={s.headerDesktopNav}>
        <li className={s.headerDropdownListItem}>
          <div className={`${s.headerLink} ${s.withChevron}`}>
            <StyledLink
              $isHeaderWhite={isHeaderWhite}
            >
              Solutions
            </StyledLink>

            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.00006 6L6.7046 9.67453C7.1421 10.1085 7.85801 10.1085 8.29551 9.67453L12.0001 6" stroke={isHeaderWhite ? 'var(--dark-v2)' : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className={s.solutionsDropdown}>
            <ul className={s.solutionsDropdownList}>
              <li className={s.solutionsDropdownListItem}>
                <a href="#" className={s.solutionsLink}>
                  I-9 / E-Verify®
                </a>
              </li>
              <li className={s.solutionsDropdownListItem}>
                <a href="#" className={s.solutionsLink}>
                  Electronic Onboarding
                </a>
              </li>
              <li className={s.solutionsDropdownListItem}>
                <a href="#" className={s.solutionsLink}>
                  Tax Withholding Forms
                </a>
              </li>
              <li className={s.solutionsDropdownListItem}>
                <a href="#" className={s.solutionsLink}>
                  Tax Credit Services
                </a>
              </li>
              <li className={s.solutionsDropdownListItem}>
                <a href="#" className={s.solutionsLink}>
                  Electronic Pay Advice
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className={s.headerDropdownListItem}>
          <StyledLink
            href='#'
            $isHeaderWhite={isHeaderWhite}
          >
            Integrations
          </StyledLink>
        </li>

        <li className={s.headerDropdownListItem}>
          <StyledLink
            href='#'
            $isHeaderWhite={isHeaderWhite}
          >
            About Us
          </StyledLink>
        </li>

        <li className={s.headerDropdownListItem}>
          <StyledLink
            href='#'
            $isHeaderWhite={isHeaderWhite}
          >
            Contact Us
          </StyledLink>
        </li>
      </ul>

      <div
        className={s.headerDropdown}
        style={{
          transform: `${isMenuOpen
            ? 'translateX(0%)'
            : 'translateX(100%)'
            }`
        }}
      >
        <div className={s.headerDropdownWrapper}>
          <div className={s.headerDropdownSolution}>
            <span className={s.headerDropdownSolutionHeading}>
              Solution
            </span>

            <ul className={s.headerDropdownList}>
              <li className={s.headerDropdownListItem}>
                <a
                  href="#"
                  className={s.headerLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  I-9 / E-Verify®
                </a>
              </li>

              <li className={s.headerDropdownListItem}>
                <a
                  href="#"
                  className={s.headerLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Electronic Onboarding
                </a>
              </li>

              <li className={s.headerDropdownListItem}>
                <a
                  href="#"
                  className={s.headerLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tax Credit Services
                </a>
              </li>

              <li className={s.headerDropdownListItem}>
                <a
                  href="#"
                  className={s.headerLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Electronic Pay Advice
                </a>
              </li>
            </ul>
          </div>

          <div className={s.headerDropdownDivider}></div>

          <ul className={s.headerDropdownList}>
            <li className={s.headerDropdownListItem}>
              <a
                href="#"
                className={s.headerLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Integrations
              </a>
            </li>

            <li className={s.headerDropdownListItem}>
              <a
                href="#"
                className={s.headerLink}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
            </li>

            <li className={s.headerDropdownListItem}>
              <a
                href="#"
                className={s.headerLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div
          className={s.headerDropdownOverlay}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      </div>
    </nav>
  )
}

export default HeaderNavigation