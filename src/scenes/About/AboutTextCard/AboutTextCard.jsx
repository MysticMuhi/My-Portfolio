import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Ahmad Muhieudhean </span>
        from <span className={s.purple}> Tamil Nadu, India.</span>
        <br />
        <br />
        Highly skilled and creative Web Developer with a passion for  
        <br />
        creating dynamic and user friednly web application.
        <br />
        <br />
        With expertise in both front-end and back-end technologies.
        <br />
        I strive to create seamless online experiences that delight users.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Learning
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Exploring
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
