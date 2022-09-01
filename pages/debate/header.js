import styled from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            <HeaderContent>
            <Title>The Debate</Title>
            <Debates>Past Debates</Debates>
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
    margin-top: .5%;
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