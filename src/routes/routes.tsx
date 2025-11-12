import { createBrowserRouter, Outlet } from 'react-router';
import MainLayout from '../layouts/MainLayOut';

//local pages
import PassengerStatus from '../pages/PassengerStatus';
import RouteStatus from '../pages/RouteStatus';
import Home from '../pages/Home';

//operator pages
import DataAnalysis from '../pages/DataAnalysis';
import OperationManagement from '../pages/OperationManagement';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'local',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <PassengerStatus />,
      },
      {
        path: 'passengerStatus',
        element: <PassengerStatus />,
      },
      {
        path: 'routeStatus',
        element: <RouteStatus />,
      },
    ],
  },
  {
    path: 'operator',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <DataAnalysis />,
      },
      {
        path: 'dataAnalysis',
        element: <DataAnalysis />,
      },
      {
        path: 'operationManagement',
        element: <OperationManagement />,
      },
    ],
  },
]);

export default routes;
