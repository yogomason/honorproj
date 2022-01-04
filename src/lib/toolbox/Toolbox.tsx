import { ToolboxContainer, ToolboxHeader, ToolboxTitle, ToolboxWrapper, ToolboxItem, ToolboxItemList, ToolboxComponent, ToolboxMain, ToolboxArrowContainer, ArrowRight, ArrowLeft } from "./ToolboxElements"
import { ToolboxProps } from "../../types"
const Toolbox = ({ open, openFunction, addFrameItems }: ToolboxProps) => {
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
                        <ToolboxItem><ToolboxComponent onClick={() => addFrameItems("BUTTON")}>Button</ToolboxComponent></ToolboxItem>
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
