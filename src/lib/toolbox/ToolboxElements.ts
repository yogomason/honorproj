import styled from "styled-components";

export const ToolboxWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:300px;
    height: 100vh;
    background:grey;
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
`