import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background-01: #F1F3FF;
        --darkblue-04: #0D28A6;
        --limegreen-04: #5CB85F;
        --neutral-02: #D0D0D0;
        --limegreen-02: #C9E7CA;
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`