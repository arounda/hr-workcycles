import Image from 'next/image';
import s from './whitelabel.module.scss';
import whitelabelImg from '@/assets/Integrations/whitelabel.png';

const Whitelabel = () => {
  return (
    <section className="section is-padding-block is-light-blue">
      <div className="container">
        <div className={s.whitelabelMain}>
          <div className={s.whitelabelInfo}>
            <h2 className='heading-h2 mb-8'>
              HRWC White-Label Option
            </h2>

            <p className='text'>
              Transform the HRWC system into your own branded solution by utilizing our white-label option. Customize both the employee-facing portal and manager portal to offer a seamless and fully customized HR experience to your clients or internal team.
            </p>
          </div>

          <div className={s.whitelabelImageWrapper}>
            <Image
              className={s.whitelabelImage}
              src={whitelabelImg}
              alt=''
            />
          </div>
        </div>

        {/* <div className={s.whitelabelCards}>
          <div className={s.whitelabelCard}>
            <div className={s.whitelabelCardTop}>
              <div className={s.whitelabelCardTopIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20H16.8C15.1198 20 14.2798 20 13.638 19.673C13.0735 19.3854 12.6146 18.9265 12.327 18.362C12 17.7202 12 16.8802 12 15.2V8.8C12 7.11984 12 6.27976 12.327 5.63803C12.6146 5.07354 13.0735 4.6146 13.638 4.32698C14.2798 4 15.1198 4 16.8 4H17M17 20C17 21.1046 17.8954 22 19 22C20.1046 22 21 21.1046 21 20C21 18.8954 20.1046 18 19 18C17.8954 18 17 18.8954 17 20ZM17 4C17 5.10457 17.8954 6 19 6C20.1046 6 21 5.10457 21 4C21 2.89543 20.1046 2 19 2C17.8954 2 17 2.89543 17 4ZM7 12L17 12M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12ZM17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
              <h3 className="heading-h5">
                Real-Time Data Access
              </h3>
            </div>

            <p className="text">
              Enable seamless data flow between systems, ensuring up-to-date and accurate information across platforms.
            </p>
          </div>

          <div className={s.whitelabelCard}>
            <div className={s.whitelabelCardTop}>
              <div className={s.whitelabelCardTopIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 18L18 20L22 16M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
              <h3 className="heading-h5">
                Improved User Experience
              </h3>
            </div>

            <p className="text">
              Deliver a smooth, cohesive experience for employees and managers with integrated systems that work seamlessly together.
            </p>
          </div>

          <div className={s.whitelabelCard}>
            <div className={s.whitelabelCardTop}>
              <div className={s.whitelabelCardTopIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
              <h3 className="heading-h5">
                Scalability and Customization
              </h3>
            </div>

            <p className="text">
              Adapt to your organization’s evolving needs with APIs that support tailored workflows and scalable solutions.
            </p>
          </div>

          <div className={s.whitelabelCard}>
            <div className={s.whitelabelCardTop}>
              <div className={s.whitelabelCardTopIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>


              </div>
              <h3 className="heading-h5">
                Enhanced Efficiency
              </h3>
            </div>

            <p className="text">
              Automate tasks and reduce manual effort, allowing your team to focus on strategic initiatives
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Whitelabel