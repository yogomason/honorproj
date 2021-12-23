import { ToolboxContainer, ToolboxHeader, ToolboxTitle, ToolboxWrapper, ToolboxItem, ToolboxItemList, ToolboxComponent } from "./ToolboxElements"

const Toolbox = () => {
    return (
        <div>
            <ToolboxWrapper>
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
            </ToolboxWrapper>
        </div>
    )
}

export default Toolbox
