import styled from "styled-components";

// src/header.js
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5% 1%;
    font-size: 3vh;
    color: white;
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
