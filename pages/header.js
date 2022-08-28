import styled from "styled-components";
import { useState } from "react";


const Header = () => {
    const [isShown, setIsShown] = useState(false)
    return (
        <Wrapper>
            The Debate
            <Menu
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                Your Debate
            </Menu>
                {isShown && (
                <Dropdown>
                    <MenuItems />
                </Dropdown>
                )}
        </Wrapper>
    )
}

const MenuItems = () => {
    const topics = ["Are we living in a simulation?", "Is calligraphy obsolete?", "Do zygotes have souls from the moment of conception?"]
    return (<>
        {topics.map((topic) => (
            <ItemWrapper />
        ))
        }</>)


}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 99vw;
    height: 50px;
    border-bottom: 3px solid white;
    display: flex;
    font-weight: bold;
`
const Menu = styled.div`
background: inherit;
color: inherit;
border: none;
align-items: center;
float: right;
font-weight: bold;
height: 50px;
`

const Dropdown = styled.div`
position: absolute;
z-index: 500;
background: grey;
height: 100px;

`
const ItemWrapper = styled.option`
    background: light-grey;
`

export default Header;