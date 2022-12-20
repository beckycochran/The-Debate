import styled from "styled-components";

// src/header.js
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5% 1%;
    font-size: 3vh;
    color: white;
    z-index: 5;
`
export const Welcome = styled.div``

export const ButtonContainer = styled.span`
`
export const Button = styled.button`
    border:none;
    z-index:-1;
    background-color:inherit;
    color: white;
    font-size: 3vh;
    padding: 1vh;
    &:hover {
    font-weight: bold;
    opacity: 0.8;
    cursor: pointer;
    }
`
//src/menu.js
export const MenuWrapper = styled.div`
height: auto;
min-width: 100px;
max-width: 150px;
position: relative;
display: inline-block;
z-index: 10;
position: absolute;
margin-left: 2vw;
font: inherit;
background: rgba(34, 34, 34, 0.5)
`
export const LI = styled(Button)`
width: 100%;
text-align: left;
`
