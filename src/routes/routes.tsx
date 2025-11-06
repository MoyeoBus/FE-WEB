import { createBrowserRouter, Outlet } from 'react-router';
import MainLayout from '../layouts/MainLayOut';
import LocalPassenger from '../pages/LocalPassenger';

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <LocalPassenger />,
      },
    ],
  },
]);

export default routes;
