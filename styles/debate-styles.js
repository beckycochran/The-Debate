import styled from "styled-components";
import { TextButton } from "./styled-components";

// src/body.js
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;
    display: flex;
    margin-top: 5%;
`
export const SecWrapper = styled(Wrapper)`
flex-direction: row;
align-items: flex-start;
margin-top: 5%;
`
export const Debate = styled.span`
display: flex;
justify-content: center;
font-weight: bold;
font-size; 32pt;
width: 100%;
`
export const Section = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 50vw;
color: cyan;
`
export const Arg = styled.span`
font-weight: bold;
color: #159ab7;
`
export const Args = styled(TextButton)`
width: 80%;
padding: .5% 1%;
margin: 1% 0;
background: #9ac5d3;
color: #141e26;
`
export const Join = styled(TextButton)`
width: 45%;
height: 11vh;
margin: 2% 0;
background: #cbd8df;
`
