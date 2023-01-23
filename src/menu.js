import { LI, MenuWrapper } from '../styles/header-styles'
import { useRouter } from "next/router"
import { archiveRoute, loginRoute, logoutRoute, profileRoute } from "./routes"
import { useUser } from "@auth0/nextjs-auth0";

const Menu = () => {
    const router = useRouter();
    const { user } = useUser()

    return (
        <MenuWrapper>
            <LI onClick={() => router.push(archiveRoute)}>Archived Debates</LI>
            {!user && <LI onClick={() => router.push(loginRoute)}>Login</LI>}
            {user && (
                <>
                    <LI onClick={() => router.push(profileRoute)}>My Profile</LI>
                    <LI onClick={() => router.push(logoutRoute)}>Logout</LI>
                </>
            )}
        </MenuWrapper>
    )
}

export default Menu;
