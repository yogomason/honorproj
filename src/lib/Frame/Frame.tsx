import { FrameWrapper, GridHorizontalLine } from "./FrameElements"

const generateGrid = () => {
    const spaceing: number = 40
    return(
    for (let i = 0; i < 40; i++) {
        <GridHorizontalLine space={spaceing} />
        console.log(`generated ${spaceing}`)
    )
    }
}

const Frame = () => {
    return (
        <>
            <FrameWrapper>
                <generateGrid />
            </FrameWrapper>
        </>
    )
}

export default Frame
