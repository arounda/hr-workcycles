import s from '@/styles/homepage.module.scss';

export default function Home() {
  return (
    <main>
      <section className={s.hero}>
        <div className="container">
          <div className={s.heroWrapper}>
            <div className={s.heroMain}>
              <div className={s.heroInfo}>
                <h1 className='heading-h1'>Built for Growth. Driven by Simplicity.</h1>
              </div>

              <div className={s.heroImageWrapper}></div>
            </div>

            <div className={s.heroStats}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
