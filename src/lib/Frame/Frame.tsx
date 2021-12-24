import { FrameWrapper, GridHorizontalLine, GridVerticalLine } from "./FrameElements"

var horizontals: number[] = []
for (let i = 0; i < 1601; i+=160) {
    horizontals.push(i)
}

var verticals: number[] = []
for (let i = 0; i < 1000; i+=160) {
    verticals.push(i)
}

const Frame = () => {
    return (
        <>
            <FrameWrapper>
                {horizontals.map(() => <GridHorizontalLine space={160} />)}
                {verticals.map((spacing) => <GridVerticalLine space={spacing} />)}
            </FrameWrapper>
        </>
    )
}

export default Frame
