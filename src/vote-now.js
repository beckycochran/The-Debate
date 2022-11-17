import {TextButton} from "../styles/styled-components"
import styled from "styled-components"
import { useDispatch } from "react-redux"


const VoteNow = () => {
    return (
        <Wrapper>
            <Vote onClick={() => router.push(debateMainRoute)}>I agree</Vote>
            <Vote onClick={() => router.push(debateMainRoute)}>I disagree</Vote>
        </Wrapper>
    )
}

export default VoteNow;

const Wrapper = styled.span`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
height: 20%;
margin: 2%;
`
const Vote = styled(TextButton)`
width: 45%;
height: 80%;
background: #cbd8df;
`