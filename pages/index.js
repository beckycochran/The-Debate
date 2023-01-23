import GlobalStyles from "../styles/global-styles";
import Synopsis from "../src/synopsis";
import Header from "../src/header";
import VoteNow from "../src/vote-now";
import { Wrapper } from "../styles/home-styles";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import { selectVote } from "../store/slices/userSlice";

const InitialVote = () => {
    const router = useRouter()
    const currentVote = useSelector(selectVote)
    return (
        <>
            <GlobalStyles />
            <Header />
            <Wrapper>
                <Synopsis />
                {currentVote === "not-voted" && <VoteNow />}
            </Wrapper>
        </>
    )
}

export default InitialVote;
