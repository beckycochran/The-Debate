import styled from "styled-components";
import { TextButton } from "../styles/styled-components";
import { useSelector } from "react-redux";
import { selectVote } from "../store/slices/userSlice";
import { useRouter } from "next/router"

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
    const args = [...Array(1)].map(() => Math.floor(Math.random() * 99))
    const sections = ["Pro", "Against"]

    return (
        <SecWrapper>
            {sections.map((s) => (
                <Section>
                    <Arg>{s}</Arg>
                    {args.map((arg) => (
                        <Args>This is my argument</Args>
                    ))}
                    {console.log(`Current Vote: ${currentVote}`)}
                    {s.toLowerCase() === currentVote && (
                        <Join onClick={()=> router.push(`/discussion/${currentVote}`)}>Join the conversation</Join>
                    )}
                </Section>
            ))}
        </SecWrapper>
    )

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;
    display: flex;
    margin-top: 5%;
`
const SecWrapper = styled(Wrapper)`
flex-direction: row;
align-items: flex-start;
margin-top: 5%;
`

const Debate = styled.span`
display: flex;
justify-content: center;
font-weight: bold;
font-size; 32pt;
width: 100%;
`
const Section = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 50vw;
color: cyan;
`
const Arg = styled.span`
font-weight: bold;
color: #159ab7;
`
const Args = styled(TextButton)`
width: 80%;
padding: .5% 1%;
margin: 1% 0;
background: #9ac5d3;
color: #141e26;
`
const Join = styled(TextButton)`
width: 45%;
height: 11vh;
margin: 2% 0;
background: #cbd8df;
`
export default Body;