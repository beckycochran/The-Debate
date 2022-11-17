import GlobalStyles from "./global-styles";
import styled from "styled-components"
import Synopsis from "../src/synopsis";
import Header from "../src/header";
import { useRouter } from 'next/router';
import { debateMainRoute } from "../src/routes";
import VoteNow from "../src/vote-now";

const InitialVote = () => {

    const router = useRouter()
    
    return (
        <>
            <GlobalStyles />
            <Header />
            <Wrapper>
                <Popup>
                    <Synopsis />
                    <VoteNow />
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




export default InitialVote;