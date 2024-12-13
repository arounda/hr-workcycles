import s from './navigation.module.scss';

const Navigation = ({ swiperRef }) => {
  return (
    <div className={`${s.testimonialsNav}`}>
      <button
        className={s.testimonialsNavBtn}
        onClick={() => swiperRef.current.slidePrev()}
      >
        prev
      </button>

      <button
        onClick={() => swiperRef.current.slideNext()}
        className={s.testimonialsNavBtn}
      >
        next
      </button>
    </div>
  );
}

export default Navigation
