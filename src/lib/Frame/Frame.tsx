import React from "react"
import Toolbox from "../toolbox/Toolbox"
import { FrameWrapper, GridHorizontalLine, GridVerticalLine } from "./FrameElements"
import { FrameProps } from "../../types"
import Draggable from "react-draggable"


var horizontals: number[] = []
for (let i = 0; i < 1800; i+=20) {
    horizontals.push(i)
}

var verticals: number[] = []
for (let i = 0; i < 2000; i+=20) {
    verticals.push(i)
}


const Frame = ({children, open, openFunction, addFrameItems, deleteFrameItem}: FrameProps) => {
    const nodeRef = React.useRef(null);
    return (
        <>
            <FrameWrapper>
                {horizontals.map((spacing) => <GridHorizontalLine space={spacing} key={spacing} />)}
                {verticals.map((spacing) => <GridVerticalLine space={spacing} key={spacing} />)}
                {/* use a map function to display children */} 
                {children.map((child) => {
                    return (
                        <Draggable nodeRef={nodeRef} key={child.key} grid={[10,10]}>
                            <div ref={nodeRef}>
                            {child.child}
                            </div>
                        </Draggable>
                    )
                })}
            </FrameWrapper>
            <Toolbox open={open} openFunction={openFunction} addFrameItems={addFrameItems} deleteFrameItem={deleteFrameItem} />
        </>
    )
}

export default Frame
