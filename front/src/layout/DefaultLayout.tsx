import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'layout';

const Page = styled.div`
`

const Sidebar = styled.div``;

const DefaultLayout: React.FC<Layout> = ({ children }) => {
    return (
        <div>
            {children}
            <Page>
                <Outlet />
            </Page>
        </div>
    );
};

export default DefaultLayout;
