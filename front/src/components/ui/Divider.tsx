import styled from "styled-components";


export const Divider = styled.div`
    width: 100%;
    margin: 10px 0;

    border-top: 1px solid ${props => props.theme.color};
    opacity: 0.5;
`