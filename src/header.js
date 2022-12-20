import { Wrapper, Welcome, ButtonContainer, Button } from '../styles/header-styles';
import { useRouter } from 'next/router';
import { loginRoute, logoutRoute, debateRoute } from "./routes";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import { updateUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useSpring, animated } from '@react-spring/web'
import styled from 'styled-components';

const Header = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { user } = useUser({ redirectTo: debateRoute })

    const userOption = !user ? "Login" : "Logout";
    const userRoute = !user ? loginRoute : logoutRoute;

    useEffect(() => {
        if (user) {
            dispatch(updateUser(user))
        }
    }, [user])

    return (
        <Wrapper>
            {user && <Welcome>Welcome {user.name}</Welcome>}
            {/* <ButtonContainer>
                <Button onClick={() => router.push(userRoute)}>
                    {userOption}
                </Button>
            </ButtonContainer> */}
            <ButtonContainer>
                <Button>
                    <I src="/menu.png" alt="menu" />
                </Button>
            </ButtonContainer>
        </Wrapper>

    )
}

const I = styled.img`
background-color: inherit;
min-height: 30px;
max-height: 50px;
`
export default Header;
