import React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { COLORS } from 'theme/colors';

import Iconify from 'components/ui/Iconify';

interface CointanerProps {
    active?: boolean;
}

const Container = styled.div<CointanerProps>`
    display: flex;
    position: relative;
    margin-bottom: 5px;
    padding: 10px;

    align-items: center;

    cursor: pointer;

    :hover:before {
        background-color: ${(props) => props.theme.backgroundLogo};
    }
    ::before {
        transition: background-color 0.2s;
        content: '';
        background-color: ${(props) => (props.active ? props.theme.backgroundLogo : 'none')};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.08;
        z-index: -1;
    }
`;

const Title = styled.div`
    height: 24px;

    font-weight: 500;
    font-size: 16px;
    flex-grow: 1;

    margin: 0 16px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

interface FolderProps {
    title: string;
    icon: string;
    color?: string;
    active?: boolean;
}

const Folder: React.FC<FolderProps> = ({ title, icon, color, active }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <Container active={active}>
            <Iconify icon={icon} width="20" color={color || COLORS.black.main} />

            <Title>{title}</Title>
            <Iconify
                icon="dashicons:arrow-right-alt2"
                width="20"
                color={theme.color}
                opacity="0.6"
            />
        </Container>
    );
};

export default Folder;
