import React from "react";
import Draggable from "react-draggable";
import {
  FrameWrapper,
  GridHorizontalLine,
  GridVerticalLine,
} from "./FrameElements";

type props = {
  children?: JSX.Element[];
};

var horizontals: number[] = [];
for (let i = 0; i < 1800; i += 20) {
  horizontals.push(i);
}

var verticals: number[] = [];
for (let i = 0; i < 2000; i += 20) {
  verticals.push(i);
}

const Frame = ({ children }: props) => {
  const nodeRef = React.useRef(null);
  return (
    <>
      <FrameWrapper>
        {horizontals.map((spacing) => (
          <GridHorizontalLine space={spacing} key={spacing} />
        ))}
        {verticals.map((spacing) => (
          <GridVerticalLine space={spacing} key={spacing} />
        ))}
        {children?.map((child) => (
          <Draggable nodeRef={nodeRef} grid={[20, 20]}>
            <div ref={nodeRef}>{child}</div>
          </Draggable>
        ))}
      </FrameWrapper>
    </>
  );
};

export default Frame;
