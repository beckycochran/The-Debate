import GlobalStyles from "../global-styles";
import styled from "styled-components"

const Synopsis = () => {
    return (
        <>
            <Wrapper>
                This is the argument
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
height: 100%;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
background: #141e26;
padding: 2% 0;
`


export default Synopsis;