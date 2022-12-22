import styled from "styled-components";

export const DBody = styled.span`
padding: 2%;
border: solid red 2px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
export const ListedComment = styled.div`
border: solid blue 2px;
margin: 2% 0;
padding: .5%;
width: fit-content;
`
export const NCWrapper = styled.form`
padding: 2%;
border: solid green 2px;
display: flex;
flex-direction: column;
justify-content: space-evenly;

`
export const NewComment = styled.input`
background: grey;
border-style: none;
width: 30vw;
height: 5vh;
margin-bottom: 2%;
`
export const PostButton = styled.button`
border-style: none;
width: fit-content;
`