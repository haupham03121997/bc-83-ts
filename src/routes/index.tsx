// import AboutPage from '@/pages/HomeTemplate/AboutPage';
// import HomePage from '@/pages/HomeTemplate/HomePage';
import React from 'react';
import { Route, type RouteObject } from 'react-router-dom';

const HomePage = React.lazy(() => import('@/pages/HomeTemplate/HomePage'));
const AboutPage = React.lazy(() => import('@/pages/HomeTemplate/AboutPage'));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  }
]

export const generateRoutes = () => {
  return routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));
};