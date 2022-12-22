import { useRouter } from "next/router"

const Discussion = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <p>Discussion side: {id}</p>
            {/* Discussion body */}
            {/* Options to add to discussion */}
            {/* Comments can be promoted or elected for addition to main page */}
            {/* When a comment passes a certain qualification, it is put into the '/debate' page on the appropriate side */}
            {/* Selecting the comment in '/debate' sends the user back to its location here */}
        </>

    )
}

export default Discussion
