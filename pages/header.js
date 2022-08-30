import styled from "styled-components";
import { useState } from "react";


const Header = () => {
    const [isShown, setIsShown] = useState(false)
    return (
        <Wrapper>
            <HeaderContent>
            <Title>The Debate</Title>
            <Debates>Debates</Debates>
            </HeaderContent>
        </Wrapper>
    )
}



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const HeaderContent = styled.div`
    display: flex;
    align-items: baseline;
    flex-direction: row;
    justify-content: space-between;
    width: 98vw;
    height: 6.5vh;
    border-bottom: 3px solid white;
    font-weight: bold;
    // padding: 0 1%;
`
const Title = styled.div`
display: inline-block;
// margin: 0 .5%;
`;
const Debates = styled(Title)`
&:hover{
    color: grey;
    cursor: pointer;
}
`

export default Header;