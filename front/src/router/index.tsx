import { useRoutes } from 'react-router-dom';

import Layout from 'layout/DefaultLayout';
import HomePage from 'pages/Home';
import WelcomePage from 'pages/Welcome';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/home', element: <HomePage /> },
                { path: '/', element: <WelcomePage /> },
            ],
        },
    ]);
};

export default Router;
