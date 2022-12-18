import { Vote, VoteWrapper, Optn, SubmitBtn, radioColors } from "../styles/home-styles"
import { changeVote } from "../store/slices/userSlice"
import { debateRoute, loginRoute } from "./routes"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react"
const VoteNow = () => {
    const { user } = useUser({ redirectTo: debateRoute })
    const dispatch = useDispatch();
    const router = useRouter();
    const [option, setOption] = useState(false);

    const addVoteHandler = () => {
        if (user) {
            dispatch(changeVote(option.selected));
            router.push(debateRoute)
        } else {
            router.push(loginRoute)
        }
    }

    const handleOptionChange = changeEvent => {
        setOption({
            selected: changeEvent.target.value
        })
    }
    return (
        <VoteWrapper>
            <Optn>
                Agree <Vote type='radio' value='pro' checked={option.selected === 'pro'} onChange={handleOptionChange} style={radioColors.pro} />
            </Optn>
            <Optn>
                Disagree <Vote type='radio' value='against' checked={option.selected === 'against'} onChange={handleOptionChange} style={radioColors.against} />
            </Optn>
            <Optn>
                Abstain / View discussion <Vote type='radio' value='abstain' checked={option.selected === 'abstain'} onChange={handleOptionChange} style={radioColors.abstain} />
            </Optn>
            {option.selected && <SubmitBtn onClick={addVoteHandler} style={{backgroundColor: radioColors[option.selected].accentColor}}>Submit</SubmitBtn>}
        </VoteWrapper>
    )
}

export default VoteNow;
