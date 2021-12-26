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
} from "./ToolboxElements";
import Button from "../Button/Button";
import Draggable from "react-draggable";
import React, { useEffect, useState } from "react";
type ToolboxProps = {
  open: boolean;
  openFunction: any;
  addFrameItems: any;
};

const Toolbox = ({ open, openFunction, addFrameItems }: ToolboxProps) => {
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
                          <Button  text="Button" />
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
                  <input type="text" value="none" />
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
