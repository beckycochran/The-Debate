import { Wrapper, Welcome, ButtonContainer, Button, MenuIcon } from '../styles/header-styles';
import { useRouter } from 'next/router';
import { loginRoute, logoutRoute, debateRoute } from "./routes";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import { updateUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import Menu from './menu';

const Header = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { user } = useUser({ redirectTo: debateRoute })
    const [toggleMenu, setToggleMenu] = useState(false)
    const userOption = !user ? "Login" : "Logout";
    const userRoute = !user ? loginRoute : logoutRoute;

    useEffect(() => {
        if (user) {
            dispatch(updateUser(user))
        }
    }, [user])


    return (
        <>
            <Wrapper>
                <ButtonContainer>
                    <Button onClick={() => setToggleMenu(!toggleMenu)}>
                        <MenuIcon src="/menu.png" alt="menu" />
                    </Button>
                </ButtonContainer>
                {user && <Welcome>Welcome {user.name}</Welcome>}
            </Wrapper>
            {toggleMenu && <Menu />}
        </>
    )
}

export default Header;
