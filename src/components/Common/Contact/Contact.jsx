'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary/ButtonPrimary';
import s from './contact.module.scss';
import contactImage from '@/assets/contact-img.png';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="section is-padding-block">
      <div className="container">
        <div className={s.contactWrapper}>
          <div className={s.contactMain}>
            <h2
              className={`heading-h2 is-centered is-white`}
              id={s.contactHeading}
            >
              Contact Our Team
            </h2>

            <p className={`text is-centered is-white ${s.contactSubtitle}`}>
              Complete our contact form and our team will get back to you as quickly as we can.
            </p>

            <ButtonPrimary
              text='Contact Us'
              link='#'
            />
          </div>

          <div className={s.contactImageWrapper}>
            <Image
              className={s.contactImage}
              src={contactImage}
              alt=''
            />
          </div>

          <div className={s.contactBg}></div>
        </div>
      </div>
    </section>
  )
}

export default Contact