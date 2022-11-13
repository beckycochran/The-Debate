import styled from "styled-components";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <LoginButton>
            Login
        </LoginButton>
    )
}

export default Header;

const LoginButton = styled.button`
width:fit-content;
border:none;
float:right;
padding-right: 1%;
padding-top: 0.5%;
z-index:-1;
background-color:inherit;
color: white;
font-size: 3vh;

&:hover {
    font-weight: bold;
    opacity: 0.8;
    cursor: pointer;
}
`
