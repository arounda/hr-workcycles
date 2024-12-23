import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className={`section ${s.integrationsHero}`}>
      <div className="container">
        <div className={s.integrationsHeroWrapper}>
          <h2 className='heading-h2 is-white mb-8'>
            Seamless integrations start here.
          </h2>

          <p className='text is-white'>
            Our APIs empower your organization to customize workflows, streamline data and reporting, and optimize processes— designed to fit your unique needs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero