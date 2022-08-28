import styled from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            The Debate
            <Menu>
                
            </Menu>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    border-bottom: 3px solid white;
    display: flex;
`
const Menu = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
`
export default Header;