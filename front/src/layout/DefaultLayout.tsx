import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'layout';

const Container = styled.div`
    
`;

const DefaultLayout: React.FC<Layout> = ({ children }) => {
    return (
        <Container>
            {children}
            <Outlet />
        </Container>
    );
};

export default DefaultLayout;
