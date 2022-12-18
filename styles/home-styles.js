import styled, { keyframes } from "styled-components"
import { TextButton } from "./styled-components"

// pages/index.js
export const Wrapper = styled.div`
height: 100vh;
width: 100vw;
padding 10vh 15vw;
`
export const Popup = styled(Wrapper)`
height: 70vh;
width: 70vw;
background: #c7522a;
justify-content: space-evenly;
padding: 2%;
`
// src/vote-now.js
export const VoteWrapper = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 100%;
height: 40%;
`
export const Optn = styled.div`
display flex;
flex-direction: row;
justify-content: space-between;
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
export const SubmitBtn = styled(TextButton)`
margin-left: 90%;
height: 14%;
float: right;
width: 20%;
border: none;
`
// src/synopsis.js
export const SynopsisWrapper = styled.div`
display: flex;
height: 60%;
flex-direction: column;
align-items: center;
justify-content: center;
// background: #141e46; (dark blue)
background: #e5c185;
color: black;
padding: 2% 0;
`
