import styled from 'styled-components';

import Sidebar from 'components/Sidebar';

const Container = styled.div`
    height: 100vh;
    display: flex;
`;
const Content = styled.div`
    background: ${(props) => props.theme.primaryBackground};
    flex-wrap: 1;
`;

const Home = () => {
    return (
        <Container>
            <Sidebar />
            <Content>text</Content>
        </Container>
    );
};

export default Home;
