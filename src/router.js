import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';
const NotFound = lazy(() => import('./pages/404'));

// This function will dynamically import all files from the pages directory
const importPages = () => {
  const context = require.context('./pages', true, /\.jsx$/);
  return context.keys().reduce((acc, path) => {
    const key = path.replace(/^\.\/|\.jsx$/g, '');
    acc[key] = lazy(() => import(`./pages/${key}`));
    return acc;
  }, {});
};

const pages = importPages();

const createRoute = (path) => {
  const normalizedPath = path === 'index' ? '' : path.toLowerCase();
  return {
    path: `/${normalizedPath}`,
    element: React.createElement(pages[path]),
  };
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Suspense fallback={Loader}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    errorElement: <NotFound />,
    children: Object.keys(pages).map(createRoute),
  },
]);

export { router };
