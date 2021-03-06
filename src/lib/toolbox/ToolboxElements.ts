import styled from "styled-components";
import { AiOutlineArrowRight, AiOutlineArrowLeft  } from "react-icons/ai"

type props = {
    open?: boolean
}

export const ToolboxWrapper = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    margin-left: ${({open}: props) => (open ? '0' : '-300px')};
    width:340px;
    height: 100vh;
    background:#808080;
    flex-direction: row;
    transition: 0.2s ease-in-out;
`

export const ToolboxMain = styled.div`
    width:300px;
    height: 100vh;
`

export const ToolboxArrowContainer = styled.div`
    width: 40px;

    height:100vh;
    background-color: #bbbbbb;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ArrowRight = styled(AiOutlineArrowRight)`
    font-size: 1.2em;
    display: ${({open}: props) => (open ? "none" : "block")};
`

export const ArrowLeft = styled(AiOutlineArrowLeft)`
    font-size: 1.2em;
    display: ${({open}: props) => (open ? "block" : "none")};
`

export const ToolboxHeader = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 4em;
`

export const ToolboxTitle = styled.h1`
`

export const ToolboxContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ToolboxItemList = styled.ul`
    list-style: none;
`

export const ToolboxItem = styled.li`
    margin: 1em;
    text-align: center;
`

export const ToolboxComponent = styled.div`
    width:100%;
    height: 100px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`