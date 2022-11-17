import GlobalStyles from "./global-styles";
import styled from "styled-components"
import { TextButton } from "../styles/styled-components";
import Synopsis from "../src/synopsis";
import Header from "../src/header";
import { useRouter } from 'next/router';
import { debateMainRoute } from "../src/routes";

const InitialVote = () => {

    const router = useRouter()
    

    return (
        <>
            <GlobalStyles />
            <Header />
            <Wrapper>
                <Popup>
                    <Synopsis />
                    <VoteNow>
                        <Vote onClick={() => router.push(debateMainRoute)}>I agree</Vote>
                        <Vote onClick={() => router.push(debateMainRoute)}>I disagree</Vote>
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


const Vote = styled(TextButton)`
width: 45%;
height: 80%;
background: #cbd8df;

`
export default InitialVote;