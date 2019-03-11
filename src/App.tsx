import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { createGlobalStyle }  from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        background-color: #6495ed;
    }
`;



export const App = ({ route }) => (
    <div>
        <GlobalStyle />
        {renderRoutes(route.routes)}
    </div>
)