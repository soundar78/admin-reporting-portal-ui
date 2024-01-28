import { createGlobalStyle } from 'styled-components'
import { colors } from './theme'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 13px;
        font-family: 'Montserrat',sans-erif;
        color: ${colors.text};
    }
    
    *, *:before, *:after {
        box-sizing: border-box;
    }
    
    html body {
        background: none;
        background-color: #fff;
        -ms-overflow-style: scrollbar;
        height: 100%;
    }
    
    body {
        font-family: 'Montserrat',sans-erif;
        margin: 0;
        font-size: 13px;
        line-height: 1.42857143;
        color: #333;
    }
    
    a {
        text-decoration: none;
        color: ${colors.primary};
    }
    img {
        vertical-align: middle;
        border: 0;
        overflow-clip-margin: content-box;
        overflow: clip;
    }
    label {
        cursor: default;
    }
    `

export default GlobalStyle
