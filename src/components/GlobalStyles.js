import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    --main : #78c7c2;
    &::-webkit-scrollbar{
        width: .8rem;
        height: 100px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #78c7c2;
        border-radius: 3rem;
    }
}

body{
    font-family: 'Montserrat', sans-serif;
}
h2{
    font-family: 'Staatliches', cursive;
    font-size: 3rem;
  
    letter-spacing: 5px;
    color:#191919;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left: 0;
        bottom: 40%;
        width: 5%;
        height: 20px;
        z-index: -1;
        background:var(--main) ;
    }
}

h3{
    padding: 1.5rem 0 .5rem ;
    color:#333;
}
p{
    font-size: 1.2rem;
    line-height: 200%;
    padding: .5rem ;
    color: #777;
}

a{
    text-decoration: none;
}
img{
    display: block;
}




`;
export default GlobalStyles;
