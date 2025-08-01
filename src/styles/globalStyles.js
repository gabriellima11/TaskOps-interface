import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
    }
    
    button{
        cursor: pointer;
    }
`

export default globalStyles