import { useState } from "react";
import { ButtonText, ButtonWrapper } from "./ButtonElements";

type props = {
  text: string
}

const Button = ({text}: props) => {
  


  return (
    <>
      <ButtonWrapper>
        <ButtonText>{text}</ButtonText>
      </ButtonWrapper>
    </>
  );
};

export default Button;
