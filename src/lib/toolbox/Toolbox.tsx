import { ToolboxContainer, ToolboxHeader, ToolboxTitle, ToolboxWrapper, ToolboxItem, ToolboxItemList, ToolboxComponent, ToolboxMain, ToolboxArrowContainer, ArrowRight, ArrowLeft } from "./ToolboxElements"

type ToolboxProps = {
    open: boolean
    openFunction: any
}

const Toolbox = ({ open, openFunction }: ToolboxProps) => {
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
                        <ToolboxItem><ToolboxComponent /></ToolboxItem>
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