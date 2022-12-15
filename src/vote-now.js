import { VoteWrapper, Vote } from "../styles/home-styles"
import { changeVote } from "../store/slices/userSlice"
import { debateRoute } from "./routes"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

const VoteNow = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const addVoteHandler = (vote) => {
        dispatch(changeVote(vote));
        router.push(debateRoute)
    }

    return (
        <VoteWrapper>
            <Vote onClick={() => addVoteHandler("pro")}>I agree</Vote>
            <Vote onClick={() => addVoteHandler("against")}>I disagree</Vote>
        </VoteWrapper>
    )
}

export default VoteNow;
