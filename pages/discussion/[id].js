import { useRouter } from "next/router"

const Discussion = () => {
    const router = useRouter()
    const { id } = router.query

    return (
            <p>Discussion side: {id}</p>
    )
}

export default Discussion
