import React from 'react';
import s from './news.module.scss';

const News = () => {
  return (
    <section className='section is-padding-block'>
      <div className="container">
        <h2 className="heading-h2 is-centered">
          Announcement News
        </h2>

        <div className={s.newsCards}>
          <div className={s.newsCard}>
            <div className={s.newsCardImageWrapper}></div>
            <div className={s.newsCardMain}>
              <div className={s.newsCardTag}></div>
              <div className={s.newsCardHeading}></div>
              <div className={s.newsCardText}></div>
              <div className={s.newsCardDate}></div>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default News