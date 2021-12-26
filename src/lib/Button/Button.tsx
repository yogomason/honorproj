import { useState } from "react";
import { ButtonText, ButtonWrapper } from "./ButtonElements";

type props = {
  getProperties: any
}

const Button = ({getProperties}: props) => {

const [buttonText, setButtonText] = useState("Button")

const alterText = (val: any) => {
  setButtonText(val)
}

  return (
    <>
      <ButtonWrapper onMouseDown={() => getProperties(buttonText, alterText)}>
        <ButtonText>{buttonText}</ButtonText>
      </ButtonWrapper>
    </>
  );
};

export default Button;
