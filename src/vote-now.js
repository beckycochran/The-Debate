import {TextButton} from "../styles/styled-components"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/slices/userSlice"
import { debateMainRoute } from "./routes"
import { useRouter } from "next/router"

const VoteNow = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    
    const addVoteHandler = (vote) => {
        dispatch(addToCart(vote, {type: "user-vote"}));
        router.push(debateMainRoute)
    }


    return (
        <Wrapper>
            <Vote onClick={() => addVoteHandler("pro")}>I agree</Vote>
            <Vote onClick={() => addVoteHandler("against")}>I disagree</Vote>
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