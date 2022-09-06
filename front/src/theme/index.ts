import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { COLORS } from './colors';

export const lightTheme: DefaultTheme = {
    background: COLORS.white.main,
    color: COLORS.black.main,
    primaryBackground: COLORS.primary.lightest,
    primaryText: COLORS.primary.dark,

    button: {
        background: COLORS.primary.dark,
        hover: COLORS.primary.light,
        color: COLORS.white.main,
    },
    backgroundLogo: COLORS.primary.main,
};

export const darkTheme: DefaultTheme = {
    background: COLORS.black.light,
    color: COLORS.white.dark,
    primaryBackground: COLORS.primary.darkest,
    primaryText: COLORS.primary.lightest,

    button: {
        background: COLORS.primary.light,
        hover: COLORS.primary.dark,
        color: COLORS.white.main,
    },
    backgroundLogo: COLORS.primary.thelight,
};

interface ThemeType extends DefaultTheme {
    background: string;
    color: string;
}

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    body {
        margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    }
`;
