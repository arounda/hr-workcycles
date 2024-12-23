import styled from 'styled-components';
import s from './headerNavigation.module.scss';
import { solutionsLinks } from '@/constants/solutionsConst';
import Link from 'next/link';
import { nonSolutionsLinks } from '@/constants/nonSolutionsLinks';

const StyledSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ $isHeaderWhite, $isHome }) => (
    $isHeaderWhite || !$isHome ? 'var(--dark)' : 'var(--white)'
  )};
  transition: all var(--btn-hover-transition);
`;

const HeaderNavigation = ({
  isMenuOpen,
  setIsMenuOpen,
  isHeaderWhite,
  isHome
}) => {
  return (
    <nav className={s.headerNav}>
      <ul className={s.headerDesktopNav}>
        <li className={s.headerNavListItem}>
          <div className={`${s.headerNavLink} ${s.withChevron}`}>
            <StyledSpan
              $isHeaderWhite={isHeaderWhite}
              $isHome={isHome}
            >
              Solutions
            </StyledSpan>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.00006 6L6.7046 9.67453C7.1421 10.1085 7.85801 10.1085 8.29551 9.67453L12.0001 6"
                stroke={isHeaderWhite || !isHome ? 'var(--dark-v2)' : "white"}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className={s.solutionsDropdown}>
            <ul className={s.solutionsDropdownList}>
              {solutionsLinks.map(item => (
                <li
                  key={item.id}
                  className={s.solutionsDropdownListItem}
                >
                  <Link
                    href={item.url}
                    className={s.solutionsLink}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {nonSolutionsLinks.map(item => (
          <li
            key={item.id}
            className={s.headerNavListItem}
          >
            <Link href={item.url}>
              <StyledSpan
                $isHeaderWhite={isHeaderWhite}
                $isHome={isHome}
              >
                {item.title}
              </StyledSpan>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={s.headerMobileNav}
        style={{
          transform: `${isMenuOpen
            ? 'translateX(0%)'
            : 'translateX(100%)'
            }`
        }}
      >
        <div className={s.headerMobileNavWrapper}>
          <div className={s.headerMobileNavSolutions}>
            <span className={s.headerMobileNavSolutionsHeading}>
              Solutions
            </span>

            <ul className={s.headerMobileNavList}>
              {solutionsLinks.map((item) => (
                <li
                  key={item.id}
                  className={s.headerNavListItem}
                >
                  <Link
                    href={item.url}
                    className={s.headerNavLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.headerMobileNavDivider}></div>

          <ul className={s.headerMobileNavList}>
            {nonSolutionsLinks.map(item => (
              <li
                className={s.headerNavListItem}
                key={item.id}
              >
                <Link
                  href={item.url}
                  className={s.headerNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={s.headerMobileNavOverlay}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      </div>
    </nav>
  )
}

export default HeaderNavigation
