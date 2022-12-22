import { useRouter } from "next/router"
import { DBody, ListedComment, NewComment, NCWrapper, PostButton } from "../../styles/discussion-styles"
import Header from "../../src/header"
import GlobalStyles from "../../styles/global-styles"
import { useState, useEffect } from "react"
import io from 'Socket.IO-client'
let socket

const Discussion = () => {
    const router = useRouter()
    const { id } = router.query
    const [comment, setComment] = useState(null)
    const [submit, setSubmit] = useState(false)

    // useEffect(() => {
    //     () => socketInitializer(),
    //         console.log("Comment Submitted!")
    // }, [submit])

    // const socketInitializer = async () => {
    //     await fetch('/api/socket')
    //     socket = io()

    //     socket.on('connect', () => {
    //         console.log('connected')
    //     })
    // }

    // return null

    return (
        <>
            <GlobalStyles />
            <Header />
            {/* Discussion body */}
            <DBody>
                <ListedComment>Sample Comment</ListedComment>
                <ListedComment>Sample Comment 2</ListedComment>
            </DBody>
            {/* Options to add to discussion */}
            <NCWrapper>
                <NewComment onChange={(e) => setComment(e.target.value)} />
                {console.log(`User input: ${comment}`)}
                <PostButton type='submit' onClick={() => setSubmit(true)}>Post</PostButton>
            </NCWrapper>
            {/* Comments can be promoted or elected for addition to main page */}
            {/* When a comment passes a certain qualification, it is put into the '/debate' page on the appropriate side */}
            {/* Selecting the comment in '/debate' sends the user back to its location here */}
            <p>Discussion side: {id}</p>
        </>

    )
}

export default Discussion
