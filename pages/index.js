import GlobalStyles from "./global-styles";
import Link from 'next/link';
import styled from "styled-components"

const Index = () => {
  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <SLink href='/debate/initial-vote'>Click me to see the debate of the day</SLink>
        <SLink href='/debate/initial-vote'>Archived Debates</SLink>
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
const SLink = styled(Link)`  
align-text: center;
`

export default Index;