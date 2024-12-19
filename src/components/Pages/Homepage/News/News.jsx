import Image from 'next/image';
import s from './news.module.scss';
import { news } from '@/constants/news';

const News = () => {
  return (
    <section className='section is-padding-block'>
      <div className="container">
        <h2 className="heading-h2 is-centered">
          Announcement News
        </h2>

        <div className={s.newsCards}>
          {news.map(item => (
            <div
              key={item.id}
              className={s.newsCard}
            >
              <div className={s.newsCardImageWrapper}>
                <Image
                  className={s.newsCardImage}
                  src={item.image}
                  alt=''
                />
              </div>

              <div className={s.newsCardMain}>
                <span className={s.newsCardTag}>
                  {item.tag}
                </span>

                <h3 className={s.newsCardHeading}>
                  {item.heading}
                </h3>

                <p className={s.newsCardText}>
                  {item.text}
                </p>

                <span className={s.newsCardDate}>
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default News