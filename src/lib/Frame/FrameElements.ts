import styled from "styled-components";

type props = {
    space: number
}

export const FrameWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    margin-left: 40px;
    background-color: lightgrey;
`

export const GridHorizontalLine = styled.div`
    width: 2px;
    height: 100%;
    background-color: grey;
    margin-left: ${({space}: props) => (`${space}px`)};
` 