import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        background: ${({ theme }: { theme: any }) => theme.bgColor};
        color: ${({ theme }: { theme: any }) => theme.textColor};
    };

    button{
        cursor: pointer;
        border:none;
        outline: none;
        color: ${({ theme }: { theme: any }) => theme.bgColor};
        background-color: ${({ theme }: { theme: any }) => theme.textColor};
    };

    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    };

    input:focus {
      outline: none;
    };
    
    a {
      text-decoration: none;
      color: black;
    };

`;
