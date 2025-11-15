import { createBrowserRouter, Outlet } from 'react-router';
import MainLayout from '../layouts/MainLayOut';

//local pages
import PassengerStatus from '../pages/PassengerStatus';
import RouteStatus from '../pages/RouteStatus';
import Home from '../pages/Home';

//operator pages
import DataAnalysis from '../pages/DataAnalysis';
import OperationManagement from '../pages/OperationManagement';
import OperatorPathFind from '../operatormains/OperatorPathFind';
import OperatorPathList from '../operatormains/OperatorPathList';
import OperatorPastPath from '../operatormains/OperatorPastPath';

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
        children: [
          {
            index: true,
            element: <OperatorPathList />,
          },
          {
            path: 'pathList',
            element: <OperatorPathList />,
          },
          {
            path: 'pathFind',
            element: <OperatorPathFind />,
          },
          {
            path: 'pastPath',
            element: <OperatorPastPath />,
          },
        ],
      },
    ],
  },
]);

export default routes;
