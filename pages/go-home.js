import GlobalStyles from "./global-styles";
import Link from 'next/link';
import styled from "styled-components"

const GoHome = () => {
    return (
        <Wrapper>
            <GlobalStyles />
            <SLink href='/'>Click me to see the debate of the day</SLink>
        </Wrapper>
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
const SLink = styled(Link)`
    align-text: center;
    &:hover {
        color:#cbd8df;
    }
`
export default GoHome;