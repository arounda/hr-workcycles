'use client';

import { useEffect, useState } from 'react';
import { newHireLoginUrl } from '@/constants/buttonsLinks';
import Image from 'next/image';
// import Lottie from 'lottie-react';
import heroImg from '@/assets/Homepage/hero-image.png';
import heroLottie from '@/assets/lottie/v005.json';
// import heroLottie1 from '@/assets/lottie/v006.json';
import ButtonPrimary from '@/components/Common/ButtonPrimary/ButtonPrimary';
import s from './hero.module.scss';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Hero = () => {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
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
                link={newHireLoginUrl}
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
      {!isLoading && (
        <Lottie
          className={s.heroLottie}
          animationData={heroLottie}
          loop={true}
        />
      )}
    </section>
  )
}

export default Hero