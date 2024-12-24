'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary/ButtonPrimary';
import s from './mission.module.scss';

const Mission = () => {
  return (
    <section className='section is-light-blue is-padding-block is-m'>
      <div className="container">
        <div className={s.missionWrapper}>
          <h2 className={`heading-h2 ${s.missionHeading}`}>
            Discover Our Mission and Vision
          </h2>

          <div className={s.missionQuote}>
            <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9064 0.337891L12.5495 2.39622C10.1396 3.98511 8.35041 5.64622 7.18198 7.37956C6.08657 9.04067 5.53887 10.5934 5.53887 12.0379C5.53887 13.4101 6.37868 14.3129 8.0583 14.7462C9.51884 15.0351 10.7603 15.6851 11.7827 16.6962C12.8051 17.6351 13.3163 18.9351 13.3163 20.5962C13.3163 22.2573 12.732 23.6296 11.5636 24.7129C10.3952 25.7962 9.08068 26.3379 7.62014 26.3379C5.79446 26.3379 4.15135 25.6518 2.69081 24.2796C1.23027 22.9073 0.5 20.5962 0.5 17.3462C0.5 14.3851 1.33981 11.3879 3.01943 8.35456C4.77208 5.249 7.40106 2.57678 10.9064 0.337891ZM29.0901 0.337891L30.7332 2.39622C28.3233 3.98511 26.5342 5.64622 25.3657 7.37956C24.2703 9.04067 23.7226 10.5934 23.7226 12.0379C23.7226 13.4101 24.5624 14.3129 26.242 14.7462C27.7026 15.0351 28.944 15.6851 29.9664 16.6962C30.9888 17.6351 31.5 18.9351 31.5 20.5962C31.5 22.2573 30.9158 23.6296 29.7473 24.7129C28.5789 25.7962 27.2644 26.3379 25.8039 26.3379C23.9782 26.3379 22.3351 25.6518 20.8746 24.2796C19.414 22.9073 18.6837 20.5962 18.6837 17.3462C18.6837 14.3851 19.5236 11.3879 21.2032 8.35456C22.9558 5.249 25.5848 2.57678 29.0901 0.337891Z" fill="black" />
            </svg>

            <p className={s.missionQuoteText}>
              We create solutions that seamlessly integrate into your existing HR processes.
            </p>
          </div>

          <div className={s.missionCards}>
            <div className={s.missionCard}>
              <h3 className={s.missionCardHeading}>
                What We Do
              </h3>

              <p className='text'>
                We create solutions that seamlessly integrate into your existing HR processes, allowing you to align with regulations effortlessly. By staying ahead of compliance trends, we make it easy for you to stay on track.
              </p>
            </div>

            <div className={s.missionCard}>
              <h3 className={s.missionCardHeading}>
                Our Commitment
              </h3>

              <p className='text'>
                Your focus should be on growing your business, not worrying about compliance. We’re dedicated to providing tools and support that remove the stress from HR, so you can operate confidently and with peace of mind.
              </p>
            </div>
          </div>
        </div>

        <div className={s.missionBtnWrapper}>
          <ButtonPrimary
            link='/about-us'
            text='Learn More'
            hasIcon={true}
            isButtonBlue={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Mission