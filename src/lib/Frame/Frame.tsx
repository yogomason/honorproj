import { FrameWrapper, GridHorizontalLine, GridVerticalLine } from "./FrameElements"

type props = {
    children?: JSX.Element[]
}

var horizontals: number[] = []
for (let i = 0; i < 1601; i+=160) {
    horizontals.push(i)
}

var verticals: number[] = []
for (let i = 0; i < 1000; i+=160) {
    verticals.push(i)
}

const Frame = ({children}: props) => {
    return (
        <>
            <FrameWrapper>
                {horizontals.map((spacing) => <GridHorizontalLine space={spacing} />)}
                {verticals.map((spacing) => <GridVerticalLine space={spacing} />)}
                {children}
            </FrameWrapper>
        </>
    )
}

export default Frame
