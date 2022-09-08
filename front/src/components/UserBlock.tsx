import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 20px 0;

    display: flex;

    align-items: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    overflow: hidden;
`;

const Name = styled.span`
    font-weight: 500;
`;

const Email = styled.div`
    opacity: 0.6;
`;

const Image = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;

    margin-right: 10px;
`;

interface UserBlockProps {
    name: string;
    email: string;
    img: string;
}

const UserBlock: React.FC<UserBlockProps> = ({ name, email, img }) => {
    return (
        <Container>
            {img && <Image src={img} alt="" />}
            <Content>
                <Name>{name}</Name>
                <Email>{email}</Email>
            </Content>
        </Container>
    );
};

export default UserBlock;
