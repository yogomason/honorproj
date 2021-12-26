import { useState } from "react";
import { ButtonText, ButtonWrapper } from "./ButtonElements";

type props = {
}

const Button = ({}: props) => {

const [buttonText, setButtonText] = useState("Button")

const alterText = (val: any) => {
  setButtonText(val)
}

  return (
    <>
      <ButtonWrapper>
        <ButtonText>{buttonText}</ButtonText>
      </ButtonWrapper>
    </>
  );
};

export default Button;
