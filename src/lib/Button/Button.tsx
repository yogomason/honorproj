import { useState } from "react";
import { ButtonText, ButtonWrapper } from "./ButtonElements";

type props = {
  text: string
}

const Button = ({text}: props) => {

const returnSelf = () => {
  console.log(Button)
}

  return (
    <>
      <ButtonWrapper onClick={returnSelf}>
        <ButtonText>{text}</ButtonText>
      </ButtonWrapper>
    </>
  );
};

export default Button;
