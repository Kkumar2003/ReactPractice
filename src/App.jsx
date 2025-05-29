import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './pages/AppLayouts';
import About from './pages/About';
import Home from './pages/Homes';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
