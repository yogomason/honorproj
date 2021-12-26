import styled from "styled-components";

type props = {
    space: number
}

export const FrameWrapper = styled.div`
display: flex;
flex-direction: row;
    width: 100vw;
    height: 100vh;
    margin-left: 40px;
    background-color: lightgrey;
`

export const GridHorizontalLine = styled.div`
position: fixed;
    width: 2px;
    height: 100%;
    opacity: 50%;
    background-color: grey;
    left: ${({space}: props) => (`${space}px`)};
` 
export const GridVerticalLine = styled.div`
position: fixed;
    height: 2px;
    width: 100%;
    opacity: 50%;
    background-color: grey;
    top: ${({space}: props) => (`${space}px`)};
` 