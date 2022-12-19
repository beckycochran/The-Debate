import styled, { keyframes } from "styled-components"
import { TextButton } from "./styled-components"

// pages/index.js
export const Wrapper = styled.div`
height: 100vh;
width: 100vw;
padding: 10vh 15vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`
// src/vote-now.js
export const VoteWrapper = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 40%;
width: 100%;
@media (min-width: 1200px) {
    max-width: 835px; 
}
`
export const Optn = styled.div`
display flex;
flex-direction: row;
justify-content: space-between;
padding: 1%;
`
export const radioColors = {
    pro: {
        accentColor: "#74a892"
    },
    against: {
        accentColor: "#c7522a"
    },
    abstain: {
        accentColor: "#e5c185"
    }
    
}

export const Vote = styled.input`
height: 100%;
width: 5%;
background: #e5c185;
`
export const SubmitBtn = styled.button`
margin-left: 80%;
height: 6%;
float: right;
width: 20%;
max-width: 130px;
border: none;
font: inherit;
border-radius: 3pt;
padding-bottom: 4%;
&:hover {
    opacity: 0.6;
    font-color: #282828; 
    cursor: pointer;
}
`
// src/synopsis.js
export const SynopsisWrapper = styled.div`
display: flex;
height: 50%;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
//background: #141e46; //(dark blue)
//background: #e5c185;
background: #e5ebf1;
color: #222;
padding: 2% 0;
@media (min-width: 1200px) {
    max-width: 835px; 
}
`
