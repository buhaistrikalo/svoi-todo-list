import { useRoutes } from 'react-router-dom';
import Layout from 'layout/DefaultLayout';
import HomePage from 'pages/Home';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [{ path: '/', element: <HomePage /> }],
        },
    ]);
};

export default Router;
