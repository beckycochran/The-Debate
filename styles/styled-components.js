import styled, { keyframes } from "styled-components"

const scaleButton = keyframes`
    from {
        transform:scale(1)
    }
    to {
        transform:scale(1.03)
    }
`
export const TextButton = styled.button`
border: none;
font-weight: bold;
&:hover {
    background: grey;
    animation: ${scaleButton} 0.3s forwards;
    cursor: pointer;
}
`
