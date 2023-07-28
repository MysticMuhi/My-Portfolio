import s from './TechSkills.module.scss';
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiCss3,
  DiJavascript,
} from 'react-icons/di';
import {
  SiHtml5,
  SiBootstrap,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <SiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <SiBootstrap />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiJavascript />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
    </ul>
  );
};

export default TechSkills;
