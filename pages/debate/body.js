import styled, {keyframes} from "styled-components";

const Body = () => {
    return (
        <Wrapper>
            <Debate>The Debate Title</Debate>
            <SecWrapper>
                <Arguments />
            </SecWrapper>
        </Wrapper>
    )
}

const Arguments = () => {
    const args = [...Array(7)].map(()=> Math.floor(Math.random()*99))
    const sections = ["Pro", "Against"]
    return (
        <>
        {sections.map((s)=>(
            <Section>
                <Arg>{s}</Arg>
                {args.map((arg)=>(
                    <Args>This is my argument</Args>
                ))}
            </Section>
        ))}
        </>
    )

}


const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;
const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

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

const Debate = styled.span`
display: flex;
justify-content: center;
font-weight: bold;
font-size; 32pt;
width: 100%;
// min-height: 20vh;
`
const SecWrapper = styled(Wrapper)`
flex-direction: row;
align-items: flex-start;
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
const Args = styled.span`
width: 80%;
padding: .5% 1%;
margin: 1% 0;
background: #9ac5d3;
color: #141e26;
animation: ${fade} 500ms ease-in forwards, ${scale} 300ms cubic-bezier(0.44, 0.11, 0.93, 0.72) forwards;

`
export default Body;