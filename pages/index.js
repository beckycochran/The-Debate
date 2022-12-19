import GlobalStyles from "../styles/global-styles";
import { Wrapper, Popup } from "../styles/home-styles";
import Synopsis from "../src/synopsis";
import Header from "../src/header";
import { useRouter } from 'next/router';
import VoteNow from "../src/vote-now";

const InitialVote = () => {

    const router = useRouter()

    return (
        <>
            <GlobalStyles />
            <Header />
            <Wrapper>
                <Synopsis />
                <VoteNow />
            </Wrapper>
        </>
    )
}

export default InitialVote;
