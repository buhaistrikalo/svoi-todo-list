import React from 'react';
import Router from 'router';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyle } from 'theme';

function App() {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Router />
                <GlobalStyle />
            </ThemeProvider>
        </>
    );
}

export default App;
