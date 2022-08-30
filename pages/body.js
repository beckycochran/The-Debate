import styled from "styled-components";

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
    const args = [...Array(5)].map(()=> Math.floor(Math.random()*99))
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
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;
    display: flex;
    margin-top: 1%;
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
`
const Args = styled.span`
background: cyan;
color: grey;
`
export default Body;