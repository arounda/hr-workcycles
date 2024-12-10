import heroImg from '@/assets/Homepage/hero-image.png';
import solutions1 from '@/assets/Homepage/solutions1.png';
import solutions2 from '@/assets/Homepage/solutions2.png';
import solutions3 from '@/assets/Homepage/solutions3.png';
import solutions4 from '@/assets/Homepage/solutions4.png';
import solutions5 from '@/assets/Homepage/solutions5.png';
import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary';
import s from '@/styles/homepage.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className={s.hero}>
        <div className="container">
          <div className={s.heroWrapper}>
            <div className={s.heroMain}>
              <div className={s.heroInfo}>
                <h1 className='heading-h1'>
                  Built for Growth. Driven by Simplicity.
                </h1>

                <p className={s.heroText}>
                  Simplify hiring compliance and workforce management with solutions that grow with your business.
                </p>

                <ButtonPrimary
                  text='Get Started'
                  link='#'
                />
              </div>

              <div className={s.heroImageWrapper}>
                <Image
                  src={heroImg}
                  className={s.heroImage}
                  priority
                  alt=''
                />
              </div>
            </div>

            <div className={s.heroStats}>
              <svg className={`${s.heroStatsLine} ${s.isMobile}`} width="346" height="2" viewBox="0 0 346 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.667969" x2="346" y2="0.667969" stroke="url(#paint0_linear_1579_10320)" strokeOpacity="0.5" strokeDasharray="4 4" />
                <defs>
                  <linearGradient id="paint0_linear_1579_10320" x1="0" y1="1.66797" x2="346" y2="1.66797" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.52" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <svg className={`${s.heroStatsLine} ${s.isTablet}`} width="688" height="1" viewBox="0 0 688 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="688" y2="0.5" stroke="url(#paint0_linear_1104_2072)" strokeOpacity="0.5" strokeDasharray="4 4" />
                <defs>
                  <linearGradient id="paint0_linear_1104_2072" x1="0" y1="1.5" x2="688" y2="1.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.52" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <svg className={`${s.heroStatsLine} ${s.isLaptop}`} width="944" height="1" viewBox="0 0 944 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="944" y2="0.5" stroke="url(#paint0_linear_1104_1556)" strokeOpacity="0.5" strokeDasharray="4 4" />
                <defs>
                  <linearGradient id="paint0_linear_1104_1556" x1="0" y1="1.5" x2="944" y2="1.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.52" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <svg className={`${s.heroStatsLine} ${s.isDesktop}`} width="1440" height="1" viewBox="0 0 1440 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="1440" y2="0.5" stroke="url(#paint0_linear_1579_8905)" strokeOpacity="0.5" strokeDasharray="4 4" />
                <defs>
                  <linearGradient id="paint0_linear_1579_8905" x1="0" y1="1.5" x2="1440" y2="1.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.52" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>



              <div className={s.heroStat}>
                <p className={s.heroStatNum}>
                  10k+
                </p>
                <p className={s.heroStatText}>
                  Happy clients
                </p>
              </div>

              <div className={s.heroStat}>
                <p className={s.heroStatNum}>
                  54M
                </p>
                <p className={s.heroStatText}>
                  Paystubs distributed
                </p>
              </div>

              <div className={s.heroStat}>
                <p className={s.heroStatNum}>
                  406M
                </p>
                <p className={s.heroStatText}>
                  Forms processed
                </p>
              </div>

              <div className={s.heroStat}>
                <p className={s.heroStatNum}>
                  6,2M
                </p>
                <p className={s.heroStatText}>
                  Employees onboarded
                </p>
              </div>

              <div className={s.heroStat}>
                <p className={s.heroStatNum}>
                  4M+
                </p>
                <p className={s.heroStatText}>
                  E-Verify® cases
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={s.heroBg} />
      </section>

      <section className="section is-light-blue">
        <div className="container">
          <h2 className='heading-h2 is-centered'>
            Your Trusted Partner for Workforce Solutions
          </h2>

          <div className={s.partnerCards}>
            <div className={s.partnerCard}>
              <svg className={s.partnerIcon} width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 17.25L17 20.25L23.75 13.5001M30.5 18C30.5 25.3627 22.4691 30.7176 19.547 32.4224C19.2149 32.6161 19.0489 32.713 18.8145 32.7632C18.6327 32.8022 18.3673 32.8022 18.1855 32.7632C17.9511 32.713 17.7851 32.6161 17.453 32.4224C14.5309 30.7176 6.5 25.3627 6.5 18V10.8265C6.5 9.62718 6.5 9.02755 6.69614 8.51211C6.86941 8.05676 7.15097 7.65047 7.51649 7.32835C7.93024 6.96371 8.4917 6.75316 9.61461 6.33207L17.6573 3.31606C17.9691 3.19912 18.1251 3.14065 18.2855 3.11747C18.4278 3.09691 18.5722 3.09691 18.7145 3.11747C18.8749 3.14065 19.0309 3.19912 19.3427 3.31606L27.3854 6.33207C28.5083 6.75316 29.0698 6.96371 29.4835 7.32835C29.849 7.65047 30.1306 8.05676 30.3039 8.51211C30.5 9.02755 30.5 9.62718 30.5 10.8265V18Z" stroke="url(#paint0_linear_1640_13320)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_1640_13320" x1="30.5" y1="32.7925" x2="6.18467" y2="3.36258" gradientUnits="userSpaceOnUse">
                    <stop offset="0.222951" stopColor="#3A40FF" />
                    <stop offset="0.376393" stopColor="#2D2EF2" />
                    <stop offset="1" stopColor="#2F0092" />
                  </linearGradient>
                </defs>
              </svg>


              <h3 className={s.partnerHeading}>
                Hire Confidently
              </h3>

              <p className={s.partnerText}>
                Hire top talent quickly, while ensuring compliance.
              </p>
            </div>

            <div className={s.partnerCard}>
              <svg className={s.partnerIcon} width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5 5.20164C26.7226 6.30617 28.25 8.59971 28.25 11.25C28.25 13.9003 26.7226 16.1938 24.5 17.2984M27.5 25.1496C29.7672 26.1755 31.8088 27.8475 33.5 30M3.5 30C6.41974 26.2839 10.3838 24 14.75 24C19.1162 24 23.0803 26.2839 26 30M21.5 11.25C21.5 14.9779 18.4779 18 14.75 18C11.0221 18 8 14.9779 8 11.25C8 7.52208 11.0221 4.5 14.75 4.5C18.4779 4.5 21.5 7.52208 21.5 11.25Z" stroke="url(#paint0_linear_1640_13329)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_1640_13329" x1="33.5" y1="30" x2="15.2406" y2="-2.16491" gradientUnits="userSpaceOnUse">
                    <stop offset="0.222951" stopColor="#3A40FF" />
                    <stop offset="0.376393" stopColor="#2D2EF2" />
                    <stop offset="1" stopColor="#2F0092" />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className={s.partnerHeading}>Onboard Seamlessly</h3>

              <p className={s.partnerText}>
                Easily onboard new employees from anywhere.
              </p>
            </div>

            <div className={s.partnerCard}>
              <svg className={s.partnerIcon} width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 31.5H7.4C6.55992 31.5 6.13988 31.5 5.81901 31.3365C5.53677 31.1927 5.3073 30.9632 5.16349 30.681C5 30.3601 5 29.9401 5 29.1V4.5M32 10.5L23.8485 18.6515C23.5515 18.9485 23.403 19.097 23.2318 19.1526C23.0811 19.2016 22.9189 19.2016 22.7682 19.1526C22.597 19.097 22.4485 18.9485 22.1515 18.6515L19.3485 15.8485C19.0515 15.5515 18.903 15.403 18.7318 15.3474C18.5811 15.2984 18.4189 15.2984 18.2682 15.3474C18.097 15.403 17.9485 15.5515 17.6515 15.8485L11 22.5M32 10.5H26M32 10.5V16.5" stroke="url(#paint0_linear_1106_5030)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_1106_5030" x1="32" y1="31.5" x2="11.2016" y2="0.358197" gradientUnits="userSpaceOnUse">
                    <stop offset="0.222951" stopColor="#3A40FF" />
                    <stop offset="0.376393" stopColor="#2D2EF2" />
                    <stop offset="1" stopColor="#2F0092" />
                  </linearGradient>
                </defs>
              </svg>


              <h3 className={s.partnerHeading}>Manage Efficiently</h3>

              <p className={s.partnerText}>
                Streamline your workflow and support your team’s growth.
              </p>
            </div>

            <div className={s.partnerCard}>
              <svg className={s.partnerIcon} width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.25 28.5C6.52208 28.5 3.5 25.4779 3.5 21.75C3.5 18.2346 6.18726 15.3469 9.61961 15.0291C10.3217 10.7582 14.0304 7.5 18.5 7.5C22.9696 7.5 26.6783 10.7582 27.3804 15.0291C30.8127 15.3469 33.5 18.2346 33.5 21.75C33.5 25.4779 30.4779 28.5 26.75 28.5C20.1652 28.5 16.015 28.5 10.25 28.5Z" stroke="url(#paint0_linear_1640_13312)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_1640_13312" x1="33.5" y1="28.5" x2="20.0625" y2="-0.243039" gradientUnits="userSpaceOnUse">
                    <stop offset="0.222951" stopColor="#3A40FF" />
                    <stop offset="0.376393" stopColor="#2D2EF2" />
                    <stop offset="1" stopColor="#2F0092" />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className={s.partnerHeading}>Scale Effortlessly</h3>

              <p className={s.partnerText}>
                Adapt and grow with HR solutions that scale with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='section is-gradient-bg is-padding-block'>
        <div className="container">
          <div className={s.solutions}>
            <div className={s.solutionsColumn}>
              <h2 className={`heading-h2 ${s.solutionsHeading}`}>
                Our Workforce Solutions
              </h2>

              <Link
                href='#'
                className={`
                  ${s.soluitonLink}
                  ${s.isLightBlue}
                `}
              >
                <div className={s.soluitonLinkMain}>
                  <div className={s.soluitonLinkHeaderWrapper}>
                    <h3 className={s.soluitonLinkHeader}>
                      Electronic Onboarding
                    </h3>

                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className={s.soluitonLinkParagraph}>
                    Transform onboarding with HRWC’s digital solution for paperless, remote setup with smart forms, approvals, and validation.
                  </p>
                </div>

                <div className={s.soluitonLinkImageWrapper}>
                  <Image
                    className={s.soluitonLinkImage}
                    src={solutions1}
                    alt=''
                  />
                </div>
              </Link>

              <Link
                href='#'
                className={`
                ${s.soluitonLink}
                ${s.isDark}
                ${s.hiddenOnDesktop}
                `}
              >
                <div className={s.soluitonLinkMain}>
                  <div className={s.soluitonLinkHeaderWrapper}>
                    <h3 className={s.soluitonLinkHeader}>
                      Tax Credit Management
                    </h3>

                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className={s.soluitonLinkParagraph}>
                    Save more with HRWC`s Tax Credit Screening Solution. Our platform automates screening to identify eligible tax credits and incentives for your business.
                  </p>
                </div>

                <div className={s.soluitonLinkImageWrapper}>
                  <Image
                    className={s.soluitonLinkImage}
                    src={solutions2}
                    alt=''
                  />
                </div>
              </Link>
            </div>
            
            <div className={s.solutionsColumn}>
              <Link
                href='#'
                className={`
                  ${s.soluitonLink}
                  ${s.hiddenOnDesktop}
                `}
              >
                <div className={s.soluitonLinkMain}>
                  <div className={s.soluitonLinkHeaderWrapper}>
                    <h3 className={s.soluitonLinkHeader}>
                      Tax Withholding Forms
                    </h3>

                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className={s.soluitonLinkParagraph}>
                    Streamline the collection of tax withholding forms for federal, state, and local jurisdictions, simplifying your new hire onboarding process.
                  </p>
                </div>

                <div className={s.soluitonLinkImageWrapper}>
                  <Image
                    className={s.soluitonLinkImage}
                    src={solutions3}
                    alt=''
                  />
                </div>
              </Link>

              <Link
                href='#'
                className={`
                  ${s.soluitonLink}
                  ${s.isGradient}
                `}
              >
                <div className={s.soluitonLinkMain}>
                  <div className={s.soluitonLinkHeaderWrapper}>
                    <h3 className={s.soluitonLinkHeader}>
                      I-9 / E-Verify ®
                    </h3>

                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className={s.soluitonLinkParagraph}>
                    Simplify your I-9 process and ensure compliance with HRWC`s I-9 Management Solution. Our platform handles everything from collection to storage, reducing paperwork and errors.
                  </p>
                </div>

                <div className={s.soluitonLinkImageWrapper}>
                  <Image
                    className={s.soluitonLinkImage}
                    src={solutions4}
                    alt=''
                  />
                </div>
              </Link>

              <Link
                href='#'
                className={`${s.soluitonLink}`}>
                <div className={s.soluitonLinkMain}>
                  <div className={s.soluitonLinkHeaderWrapper}>
                    <h3 className={s.soluitonLinkHeader}>
                      Electronic Pay Advice
                    </h3>

                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className={s.soluitonLinkParagraph}>
                    Switch to HRWC`s Electronic Pay Solution for secure, digital pay statements accessible anytime, anywhere.
                  </p>
                </div>

                <div className={s.soluitonLinkImageWrapper}>
                  <Image
                    className={s.soluitonLinkImage}
                    src={solutions5}
                    alt=''
                  />
                </div>
              </Link>
            </div>

            <div
              className={`
                ${s.solutionsColumn}
                ${s.isThirdColumn}
              `}
            >
              <Link
                href='#'
                className={`${s.soluitonLink}`}
              >
                <div className={s.soluitonLinkMain}>
                  <div className={s.soluitonLinkHeaderWrapper}>
                    <h3 className={s.soluitonLinkHeader}>
                      Tax Withholding Forms
                    </h3>

                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className={s.soluitonLinkParagraph}>
                    Streamline the collection of tax withholding forms for federal, state, and local jurisdictions, simplifying your new hire onboarding process.
                  </p>
                </div>

                <div className={s.soluitonLinkImageWrapper}>
                  <Image
                    className={s.soluitonLinkImage}
                    src={solutions3}
                    alt=''
                  />
                </div>
              </Link>

              <Link
                href='#'
                className={`${s.soluitonLink} ${s.isDark}`}
              >
                <div className={s.soluitonLinkMain}>
                  <div className={s.soluitonLinkHeaderWrapper}>
                    <h3 className={s.soluitonLinkHeader}>
                      Tax Credit Management
                    </h3>

                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className={s.soluitonLinkParagraph}>
                    Save more with HRWC`s Tax Credit Screening Solution. Our platform automates screening to identify eligible tax credits and incentives for your business.
                  </p>
                </div>

                <div className={s.soluitonLinkImageWrapper}>
                  <Image
                    className={s.soluitonLinkImage}
                    src={solutions2}
                    alt=''
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
