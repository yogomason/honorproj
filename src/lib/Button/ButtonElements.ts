import styled from "styled-components";

type ButtonElementsProps = {
    height?: number;
    width?: number;
    backgroundColor?: string;
}


export const ButtonWrapper = styled.div`
position: fixed;
    width: ${({ width }: ButtonElementsProps) => width ? `${width}px` : '200px'};
    height:${({height}: ButtonElementsProps) => height ? `${height}px` : '50px'};
    left:40;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ backgroundColor }: ButtonElementsProps) => backgroundColor ? backgroundColor : '#fff'};
    cursor: pointer;
`

export const ButtonText = styled.p`
    font-size: 1.2em;
`