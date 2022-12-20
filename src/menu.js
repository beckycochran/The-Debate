import { LI, MenuWrapper } from '../styles/header-styles'
import { useRouter } from "next/router"
import { archiveRoute, loginRoute } from "./routes"


const Menu = () => {
    const router = useRouter();

    return (
        <MenuWrapper>
            <LI onClick={()=>router.push(loginRoute)}>Login</LI>
            <LI onClick={()=>router.push(archiveRoute)}>Archived Debates</LI>
        </MenuWrapper>
    )
}

export default Menu;