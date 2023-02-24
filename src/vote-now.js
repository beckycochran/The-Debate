import { Form, Vote, VoteWrapper, Optn, SubmitBtn, BtnWrapper, radioColors } from "../styles/home-styles"
import { changeVote } from "../store/slices/userSlice"
import { debateRoute, loginRoute } from "./routes"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react"

////
import { useSelector } from "react-redux";
import { selectVote } from "../store/slices/userSlice";

const VoteNow = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user } = useUser({ redirectTo: debateRoute })
    const [option, setOption] = useState(false);
    const currentVote = useSelector(selectVote)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("POSTED");
        fetch("/api/post-vote", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ selected: option.selected })
        })
            .then(res => res.json())
            .then((data) => console.log(data))
            .catch(error => console.log(error))
    }

    const addVoteHandler = () => {
        dispatch(changeVote(option.selected))

        if (user || option.selected === "abstain") {
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
            <VoteWrapper onSubmit={handleSubmit}>
                <Optn style={{ background: option.selected === 'pro' ? "linear-gradient(to right, #74a892, #222)" : "none" }}>
                    Agree <Vote type='radio' value='pro' checked={option.selected === 'pro'} onChange={handleOptionChange} style={radioColors.pro} />
                </Optn>
                <Optn style={{ background: option.selected === 'against' ? "linear-gradient(to right, #c7522a, #222)" : "none" }}>
                    Disagree <Vote type='radio' value='against' checked={option.selected === 'against'} onChange={handleOptionChange} style={radioColors.against} />
                </Optn>
                <Optn style={{ background: option.selected === 'abstain' ? "linear-gradient(to right, #e5c185, #222)" : "none" }}>
                    Abstain / View discussion <Vote type='radio' value='abstain' checked={option.selected === 'abstain'} onChange={handleOptionChange} style={radioColors.abstain} />
                </Optn>
                <BtnWrapper>
                    {option.selected &&
                        <SubmitBtn type="submit" onClick={addVoteHandler} style={{ backgroundColor: radioColors[option.selected].accentColor }}>
                            Submit
                        </SubmitBtn>}
                </BtnWrapper>
            </VoteWrapper>
        </>
    )
}

export default VoteNow;
