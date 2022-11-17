import { Wrapper, Welcome, ButtonContainer, Button } from '../styles/header-styles';
import { useRouter } from 'next/router';
import { loginRoute, logoutRoute, debateRoute } from "./routes";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import { updateUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { user } = useUser({ redirectTo: debateRoute })

    const userOption = !user ? "Login" : "Logout";
    const userRoute = !user ? loginRoute : logoutRoute;
    console.log(`debate route: ${debateRoute}\n`);
    console.log('user route: ' + userRoute)


    useEffect(() => {
        if (user) {
            dispatch(updateUser(user))
        }
    }, [user])

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
