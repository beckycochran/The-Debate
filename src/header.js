import styled from "styled-components";
import { useRouter } from 'next/router';
import { loginRoute, logoutRoute } from "./routes";
import { useUser } from "@auth0/nextjs-auth0";
import { debateMainRoute } from "../src/routes";

const Header = () => {
    const router = useRouter()
    const { user } = useUser({ redirectTo: debateMainRoute })
    console.log("User:", user)

    const userOption = !user ? "Login" : "Logout";
    const userRoute = !user ? loginRoute : logoutRoute;


    return (
        <Wrapper>
            {user && <Welcome>Welcome {user.name}</Welcome>}
            <ButtonContainer>
                <Button onClick={() => router.push(userRoute)}>
                    {userOption}
                </Button>
            </ButtonContainer>
        </Wrapper>

    )
}

export default Header;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5% 1%;
    font-size: 3vh;
    color: white;
`
const Welcome = styled.div``

const ButtonContainer = styled.span`
position: relative;
float: right;
`
const Button = styled.button`
    border:none;
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
