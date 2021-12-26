import { ToolboxContainer, ToolboxHeader, ToolboxTitle, ToolboxWrapper, ToolboxItem, ToolboxItemList, ToolboxComponent, ToolboxMain, ToolboxArrowContainer, ArrowRight, ArrowLeft } from "./ToolboxElements"
import Button  from "../Button/Button"
import Draggable from "react-draggable"
import React from "react"
type ToolboxProps = {
    open: boolean
    openFunction: any
    addFrameItems: any
}

const Toolbox = ({ open, openFunction, addFrameItems }: ToolboxProps) => {
    const nodeRef = React.useRef(null);
    return (
        <>
            <ToolboxWrapper open={open}>
                <ToolboxMain>
                    <ToolboxHeader>
                        <ToolboxTitle>
                        Toolbox
                        </ToolboxTitle>
                    </ToolboxHeader>
                    <ToolboxContainer>
                        <ToolboxItemList>
                        <ToolboxItem><ToolboxComponent onClick={() => addFrameItems(<Draggable nodeRef={nodeRef}><div ref={nodeRef}><Button /></div></Draggable>)}>Button</ToolboxComponent></ToolboxItem>
                        <ToolboxItem><ToolboxComponent /></ToolboxItem>
                        <ToolboxItem><ToolboxComponent /></ToolboxItem>
                        </ToolboxItemList>
                    </ToolboxContainer>
                </ToolboxMain>
                <ToolboxArrowContainer onClick={openFunction}>
                    <ArrowRight open={open}/>
                    <ArrowRight open={open}/>
                    <ArrowLeft open={open}/>
                    <ArrowLeft open={open}/>
                </ToolboxArrowContainer>
            </ToolboxWrapper>
        </>
    )
}

export default Toolbox
