// import AboutPage from '@/pages/HomeTemplate/AboutPage';
// import HomePage from '@/pages/HomeTemplate/HomePage';
import { lazy, Suspense, type FC, type LazyExoticComponent } from 'react';
import { type RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/HomeTemplate/HomePage'));
const AboutPage = lazy(() => import('@/pages/HomeTemplate/AboutPage'));
const AuthTemplate = lazy(() => import('@/pages/AuthTemplate'));
const LoginPage = lazy(() => import('@/pages/AuthTemplate/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/AuthTemplate/RegisterPage'));

const withSuspense = (Component: LazyExoticComponent<FC>) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: withSuspense(HomePage),
  },
  {
    path: "/about",
    element: withSuspense(AboutPage),
  },
  {
    path: "/auth",
    element: withSuspense(AuthTemplate),
    children:[
      {
        // /auth/login
        path: "login",
        element: withSuspense(LoginPage)
      },
      {
        // /auth/register
        path: "register",
        element: withSuspense(RegisterPage)
      },
      // forgot password
      // email success
    ]
  },
  // {
  //   path: "/admin",
  //   element: withSuspense(<p>Admin</p>),
  //   children: [
  //     {
  //       path: "users-management",
  //       element: withSuspense(<p>Users Management</p>)
  //     },
  //     {
  //       path: "movies-management",
  //       element: withSuspense(<p>Movies Management</p>)
  //     }
  //   ]
  // },
  {
    path: "*",
    element: <div>Not Found</div>
  }
]

