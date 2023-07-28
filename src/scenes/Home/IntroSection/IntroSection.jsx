import s from './IntroSection.module.scss';
import avatar from '../../../assets/photo2.png';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
            I'm Muhi, Web Developer with a passion for creating dynamic and 
               <br />
               user-friendly websites.
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                  HTML, CSS, JavaScript, React
                </b>
              </i>
              <br />
              and other relevant technologies. I have experience in
              integrating various <br />
              third-party libraries, API integration and push
              notifications.
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>
            </p>
          </div>
        </div>
        
        <Tilt trackOnWindow={true}>
      <LazyLoadImage alt="avatar" effect="blur" src={avatar} width ={250} height = {250} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/MysticMuhi"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>

          <li className={s.socialLink}>
            <a
              href="https://t.me/Muhi7tg"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://bh.linkedin.com/in/ahmad-muhieudhean-28bb8123a"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
