import styled from "styled-components";

export const Button = styled.button`
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 14px;
color: ${(props) => props.theme.button.color};
background: ${(props) => props.theme.button.background};
border: 0;
border-radius: 20px;

cursor: pointer;

padding: 10px;

transition: background 0.5s;
:hover {
    background: ${(props) => props.theme.button.hover};
}
`;