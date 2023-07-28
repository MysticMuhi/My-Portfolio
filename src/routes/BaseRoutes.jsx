import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  RESUME: '/resume',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.RESUME} element={<Resume />} />
      </Routes>

    </>
  );
};

export default BaseRoutes;
