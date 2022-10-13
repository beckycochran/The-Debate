import GlobalStyles from "../global-styles";
import styled, { keyframes } from "styled-components"
import Synopsis from "./synopsis";
import { useRouter } from 'next/router';
const InitialVote = () => {
    const router = useRouter()
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Popup>
                    <Synopsis />
                    <VoteNow>
                        <Vote onClick={() => router.push('/debate/main')}>I agree</Vote>
                        <Vote onClick={() => router.push('/debate/main')}>I disagree</Vote>
                    </VoteNow>
                </Popup>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

const Popup = styled(Wrapper)`
height: 70vh;
width: 70vw;
background: #141e26;
justify-content: space-evenly;
padding: 2%;
`

const VoteNow = styled.span`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
height: 20%;
margin: 2%;
`
const scaleButton = keyframes`
    from {
        transform:scale(1)
    }
    to {
        transform:scale(1.03)
    }
`

const Vote = styled.button`
border: none;
width: 45%;
height: 80%;
background: #cbd8df;
font-weight: bold;
&:hover {
    background: grey;
    animation: ${scaleButton} 0.3s forwards
    
}
`
export default InitialVote;