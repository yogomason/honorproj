import { useState } from "react";
import { ButtonText, ButtonWrapper } from "./ButtonElements";

type props = {
  text: string;
  Itemkey: number;

};

const Button = ({ text, Itemkey }: props) => {
  const [properties, setProperties] = useState({
    text: text,
    width: 10
  });

  const test = () => {
    setProperties({...properties, text: "hello"})
  }

  return (
    <>
      <ButtonWrapper onMouseDown={test}>
        <ButtonText>{properties.text}</ButtonText>
      </ButtonWrapper>
    </>
  );
};

export default Button;
