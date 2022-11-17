import styled, { keyframes } from "styled-components"
import { TextButton } from "./styled-components"

// pages/index.js
export const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`
export const Popup = styled(Wrapper)`
height: 70vh;
width: 70vw;
background: #141e26;
justify-content: space-evenly;
padding: 2%;
`
// src/vote-now.js
export const VoteWrapper = styled.span`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
height: 20%;
margin: 2%;
`
export const Vote = styled(TextButton)`
width: 45%;
height: 80%;
background: #cbd8df;
`
// src/synopsis.js
export const SynopsisWrapper = styled.div`
display: flex;
height: 100%;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
background: #141e26;
padding: 2% 0;
`
