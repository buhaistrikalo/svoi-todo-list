import { Icon } from '@iconify/react';
import styled, { css } from 'styled-components';

import { COLORS } from 'theme/colors';

const Container = styled.div`
    background: ${COLORS.primary.main};
    border-radius: 50%;
    padding: 24px;
    position: relative;

    ::before {
        content: '';

        position: absolute;
        left: -72px;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        padding: 72px;
        margin: auto;

        opacity: 0.08;
        z-index: -1;

        background-color: ${COLORS.primary.main};
        border-radius: 50%;
    }

    ::after {
        content: '';
        position: absolute;
        left: -156px;
        top: 0;
        bottom: 0;
        margin: auto;
        height: 100%;
        width: 100%;
        padding: 156px;
        opacity: 0.04;
        z-index: -1;
        background-color: ${COLORS.primary.main};

        border-radius: 50%;
    }
`;

interface CircleProps {
    posisiton: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    };
    size: string;
}

const Circle = styled.div<CircleProps>`
    position: relative;
    ::after {
        content: '';
        position: absolute;
        ${(props) =>
            props.posisiton.top &&
            css`
                top: ${props.posisiton.top};
            `};
        ${(props) =>
            props.posisiton.bottom &&
            css`
                bottom: ${props.posisiton.bottom};
            `};
        ${(props) =>
            props.posisiton.right &&
            css`
                right: ${props.posisiton.right};
            `};
        ${(props) =>
            props.posisiton.left &&
            css`
                left: ${props.posisiton.left};
            `};

        height: ${(props) => props.size};
        width: ${(props) => props.size};
        z-index: -1;
        background-color: ${(props) => props.color};

        border-radius: 50%;
    }
`;

// TODO:
// Адаптация под мобилы

let CIRCLES_CONFIG = [
    { posisiton: { top: '-8rem', right: '-50px' }, size: '25px', color: '#F85977' },
    { posisiton: { bottom: '-300px', left: '-30px' }, size: '40px', color: '#2BB27E' },
    { posisiton: { bottom: '-144px', left: '150px' }, size: '10px', color: '#2BB27E' },
    { posisiton: { bottom: '-217px', left: '-150px' }, size: '10px', color: '#2BB27E' },
    { posisiton: { bottom: '55px', left: '-160px' }, size: '10px', color: '#2BB27E' },
    { posisiton: { bottom: '0px', left: '250px' }, size: '10px', color: '#2BB27E' },
    { posisiton: { bottom: '-260px', right: '-150px' }, size: '10px', color: '#008ef1' },
    { posisiton: { top: '-140px', left: '-90px' }, size: '40px', color: '#008ef1' },
];

const Illustration = () => {
    return (
        <Container>
            {CIRCLES_CONFIG.map((circle, index) => (
                <Circle posisiton={circle.posisiton} size={circle.size} color={circle.color} key={index}/>
            ))}
            <Icon icon="ant-design:check-outlined" width="175" color="#fff" />
        </Container>
    );
};

export default Illustration;
