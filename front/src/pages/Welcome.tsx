import styled from 'styled-components';

import Illustration from 'components/Illustration';
import { Button } from 'components/ui';

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    max-width: 330px;
    padding: 0 60px;

    
`;

const Title = styled.h1`
    font-size: 57px;
    line-height: 64px;
    font-style: normal;
    font-weight: 400;

    margin: 0;
    margin-bottom: 16px;
    
    text-align: center;

    @media (min-width: 768px) {
        text-align: start;
    }
`;

const Subtitle = styled.span`
    display: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.primaryText};

    margin-bottom: 100px;

    @media (min-width: 768px) {
        display: block;
    }
`;

const LogoContainer = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.08;
        z-index: -1;
        background-color: ${(props) => props.theme.backgroundLogo};
    }

    @media (min-width: 768px) {
        display: flex;
    }
`;

const Welcome = () => {
    return (
        <Container>
            <Content>
                <Title>Welcome to Uno&nbsp;To&nbsp;Do!</Title>
                <Subtitle>
                    Start using the best to-do app, you can create and manage your To Do lists to
                    improve your organization. Get started!
                </Subtitle>
                <Button>Get started</Button>
            </Content>
            <LogoContainer>
                <Illustration />
            </LogoContainer>
        </Container>
    );
};

export default Welcome;
