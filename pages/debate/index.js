import GlobalStyles from "../global-styles";
import styled from "styled-components"

const Index = () => {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Popup>
                    debate synopsis
                    <VoteNow>
                        <Vote>I agree</Vote>
                        <Vote>I disagree</Vote>
                    </VoteNow>
                </Popup>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Popup = styled(Wrapper)`
 height: 70vh;
 width: 70vw;
 background: #141e26;
 justify-content: space-evenly;
`

const VoteNow = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;

`
const Vote = styled.button`
border: none:

`
export default Index;