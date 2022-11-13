import GlobalStyles from "./global-styles";
import Link from 'next/link';
import styled from "styled-components"
import Header from "../src/header";
const Index = () => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Wrapper>
        <GoToDebate href='/debate/initial-vote'>Click me to see the debate of the day</GoToDebate>
        {/* <ArchivedDebates href='/debate/initial-vote'>Archived Debates</ArchivedDebates> */}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
display: flex;
height: 90vh;
width: 100vw;
flex-direction: column;
align-items: center;
justify-content: center;
`
const GoToDebate = styled(Link)`  
align-text: center;
font-style:strong;
`
const ArchivedDebates = styled(GoToDebate)`  
align-text: center;
background-color: dark-grey;
`
export default Index;