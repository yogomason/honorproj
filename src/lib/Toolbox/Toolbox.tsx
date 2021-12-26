import {
  ToolboxContainer,
  ToolboxHeader,
  ToolboxTitle,
  ToolboxWrapper,
  ToolboxItem,
  ToolboxItemList,
  ToolboxComponent,
  ToolboxMain,
  ToolboxArrowContainer,
  ArrowRight,
  ArrowLeft,
  ComponentProps,
  PropsList,
  PropertiesContainer,
  Property,
  PropertyName,
  PropertyTextInput,
} from "./ToolboxElements";
import Button from "../Button/Button";
import Draggable from "react-draggable";
import React from "react";
type ToolboxProps = {
  open: boolean;
  openFunction: any;
  addFrameItems: any;
  currProp: any;
};

const Toolbox = ({ open, openFunction, addFrameItems, currProp }: ToolboxProps) => {
  const nodeRef = React.useRef(null);
  return (
    <>
      <ToolboxWrapper open={open}>
        <ToolboxMain>
          <ToolboxHeader>
            <ToolboxTitle>Toolbox</ToolboxTitle>
          </ToolboxHeader>
          <ToolboxContainer>
            <ToolboxItemList>
              <ToolboxItem>
                <ToolboxComponent
                  onClick={() =>
                    addFrameItems(
                      <Draggable grid={[10, 10]} nodeRef={nodeRef}>
                        <div ref={nodeRef}>
                          <Button getProperties={currProp}/>
                        </div>
                      </Draggable>
                    )
                  }
                >
                  Button
                </ToolboxComponent>
              </ToolboxItem>
              <ToolboxItem>
                <ToolboxComponent />
              </ToolboxItem>
              <ToolboxItem>
                <ToolboxComponent />
              </ToolboxItem>
              <ToolboxItem>
                <ToolboxComponent />
              </ToolboxItem>
              <ToolboxItem>
                <ToolboxComponent />
              </ToolboxItem>
            </ToolboxItemList>
          </ToolboxContainer>
          <PropertiesContainer>
            <ComponentProps>
              <PropsList>
                <Property>
                  <PropertyName>
                    Text Content:
                  </PropertyName>
                  <PropertyTextInput type="text" value="hello"/>
                </Property>
              </PropsList>
            </ComponentProps>
          </PropertiesContainer>
        </ToolboxMain>
        <ToolboxArrowContainer onClick={openFunction}>
          <ArrowRight open={open} />
          <ArrowRight open={open} />
          <ArrowLeft open={open} />
          <ArrowLeft open={open} />
        </ToolboxArrowContainer>
      </ToolboxWrapper>
    </>
  );
};

export default Toolbox;
