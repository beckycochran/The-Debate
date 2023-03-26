import { useSelector } from "react-redux";
import { selectVote } from "../store/slices/userSlice";
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { changeVote } from "../store/slices/userSlice"
import { useState, useEffect } from "react";
import { Wrapper, SecWrapper, Debate, Section, Arg, Args, Join } from "../styles/debate-styles";

const Body = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({ argumentTitle: "", args: [], sections: [] })
    
    useEffect(() => {
        fetch("/api/seed-arguments", { method: "GET" })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                const {title, args, sections} = data;
                setData({title, args, sections })})
            .catch(error => console.log(error))
    }, [])
    
    return (
        <Wrapper>
            {data.argumentTitle && <Debate>{data.argumentTitle}</Debate>}
            <Arguments args={data.args} sections={data.sections} />
        </Wrapper>
    )
}

const Arguments = ({args, sections}) => {
    const router = useRouter()
    const currentVote = useSelector(selectVote)


    return (

        <SecWrapper>
            {!sections.length && !sections.length && <h1>Loading</h1>}
            {sections.length && sections.map((s, i) => (
                <Section key={i}>
                    <Arg>{s}</Arg>
                    {args.length && args.map((arg, i) => (
                        <Args key={i}>This is my argument</Args>
                    ))}
                    {s.toLowerCase() === currentVote && (
                        <Join onClick={() => router.push(`/discussion/${currentVote}`)}>Join the conversation</Join>
                    )}
                </Section>
            ))}
        </SecWrapper>
    )
}

export default Body;
