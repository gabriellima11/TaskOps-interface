import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: #111827;
        color: #F9FAFB;
    }
    
    button{
        cursor: pointer;
    }
`

export default globalStyles