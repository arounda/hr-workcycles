'use client';

import { testimonials } from '@/constants/testimonials';
import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import NavButtons from './NavButtons';

import s from './testimonials.module.scss';

const Testimonials = () => {
  const swiperRef = useRef();

  return (
    <section className='section'>
      <div className="container">
        <div className={s.testimonialsWrapper}>
          <div className={s.testimonialsTop}>
            <div>
              <h2 className="heading-h2">
                What our customers say
              </h2>

              <p className={`text ${s.testimonialsSubheading}`}>
                Hear from our clients about their experiences working with us. Discover how our solutions have made a positive impact and helped businesses achieve their goals.
              </p>
            </div>


            <div className={s.testimonialsNavDesktopWrapper}>
              <NavButtons swiperRef={swiperRef} />
            </div>
          </div>

          <div className={s.testimonialsMain}>
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                }
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className={s.testimonialsCards}
            >
              {testimonials.map(item => (
                <SwiperSlide
                  className={s.testimonialsCard}
                  key={item.id}
                >
                  <div className={s.testimonialsCardPersonInfo}>
                    <Image
                      src={item.person_avatar}
                      alt=''
                      className={s.testimonialsCardAvatar}
                    />

                    <div className={s.testimonialsCardCreds}>
                      <h3 className={s.testimonialsCardName}>
                        {item.person_name}
                      </h3>
                      <p className={s.testimonialsCardRole}>
                        {item.person_role}
                      </p>
                    </div>
                  </div>

                  <p className='text'>
                    {item.text}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={s.testimonialsNavMobileWrapper}>
              <NavButtons swiperRef={swiperRef} />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Testimonials