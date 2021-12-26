import React from "react"
import { FrameWrapper, GridHorizontalLine, GridVerticalLine } from "./FrameElements"

type props = {
    children?: JSX.Element[]
}

var horizontals: number[] = []
for (let i = 0; i < 1601; i+=80) {
    horizontals.push(i)
}

var verticals: number[] = []
for (let i = 0; i < 1000; i+=80) {
    verticals.push(i)
}


const Frame = ({children}: props) => {
    return (
        <>
            <FrameWrapper>
                {horizontals.map((spacing) => <GridHorizontalLine space={spacing} key={spacing} />)}
                {verticals.map((spacing) => <GridVerticalLine space={spacing} key={spacing} />)}
                {children}
            </FrameWrapper>
        </>
    )
}

export default Frame
