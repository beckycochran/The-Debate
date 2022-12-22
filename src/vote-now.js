import { Vote, VoteWrapper, Optn, SubmitBtn, BtnWrapper, radioColors } from "../styles/home-styles"
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
        if (user || option.selected === 'abstain') {
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
        <>
        <VoteWrapper>
            <Optn style={{background: option.selected === 'pro' ? "linear-gradient(to right, #74a892, #222)": "none" }}>
                Agree <Vote type='radio' value='pro' checked={option.selected === 'pro'} onChange={handleOptionChange} style={radioColors.pro} />
            </Optn>
            <Optn style={{background: option.selected === 'against' ? "linear-gradient(to right, #c7522a, #222)": "none" }}>
                Disagree <Vote type='radio' value='against' checked={option.selected === 'against'} onChange={handleOptionChange} style={radioColors.against} />
            </Optn>
            <Optn style={{background: option.selected === 'abstain' ? "linear-gradient(to right, #e5c185, #222)": "none" }}>
                Abstain / View discussion <Vote type='radio' value='abstain' checked={option.selected === 'abstain'} onChange={handleOptionChange} style={radioColors.abstain} />
            </Optn>
        </VoteWrapper>
            <BtnWrapper>{option.selected && <SubmitBtn onClick={addVoteHandler} style={{backgroundColor: radioColors[option.selected].accentColor}}>Submit</SubmitBtn>}</BtnWrapper>
        </>
    )
}

export default VoteNow;
