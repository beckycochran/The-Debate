import { useSelector } from "react-redux";
import { selectVote } from "../store/slices/userSlice";
import { useRouter } from "next/router"
import { Wrapper, SecWrapper, Debate, Section, Arg, Args, Join } from "../styles/debate-styles";

const Body = () => {
    return (
        <Wrapper>
            <Debate>The water is turning the frogs gay</Debate>
            <Arguments />
        </Wrapper>
    )
}

const Arguments = () => {
    const router = useRouter()
    const currentVote = useSelector(selectVote)
    const args = ["Placeholder argument", "Placeholder rebuttal"]
    const sections = ["Pro", "Against"]

    return (
        <SecWrapper>
            {sections.map((s) => (
                <Section>
                    <Arg>{s}</Arg>
                    {args.map((arg) => (
                        <Args>This is my argument</Args>
                    ))}

                    {s.toLowerCase() === currentVote && (
                        <Join onClick={()=> router.push(`/discussion/${currentVote}`)}>Join the conversation</Join>
                    )}
                </Section>
            ))}
        </SecWrapper>
    )
}

export default Body;
