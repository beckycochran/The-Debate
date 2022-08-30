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
    return (
        <>
            <Section >
                Pro
            </Section>
            <Section>
                Against
            </Section>
        </>
    )

}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 50px;
    display: flex;
    margin-top: 1%;
`

const Debate = styled.span`
display: flex;
justify-content: center;
font-weight: bold;
font-size; 32pt;
width: 100%;
`
const SecWrapper = styled(Wrapper)`
flex-direction: row;

`
const Section = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 50vw;
color: cyan;
`
export default Body;