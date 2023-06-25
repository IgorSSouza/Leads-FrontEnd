import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        
    }

    body{
        font-family: 'Montserrat', sans-serif;
        //background: rgb(96,232,250);
        //background: linear-gradient(90deg, #70e7f7 0%, rgba(108, 197, 209, 0.877) 21%, rgba(86, 211, 236, 0.922) 100%);
        height: 100vh;
    }

    html, body, #root, .App{
        //height: 100%;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

`;

export const Container = styled.section`

    max-width: 1200px;
    margin: 20px auto ;
    height: auto;
    background-color: white;
    padding: 10px;
    
`;