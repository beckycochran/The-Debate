import { useRouter } from "next/router"
import Header from "../../src/header"

const Discussion = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Header />
            <p>Discussion side: {id}</p>
        </>
    )
}

export default Discussion
