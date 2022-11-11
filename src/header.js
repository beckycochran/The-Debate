import styled from "styled-components"
const Header = () => {
    return (
        <Wrapper>
            <LB src="/login-button.svg" alt="Login" />
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 1%;
`
const LB = styled.img`
    color:white;
    max-height:5vh;
    max-width:5vw;
`