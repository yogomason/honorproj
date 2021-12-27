import { useState } from "react";
import { ButtonText, ButtonWrapper } from "./ButtonElements";

type props = {
  text: string;
  Itemkey: number;
  findItem: any;
  getSet: any;
};

const Button = ({ text, Itemkey, findItem, getSet }: props) => {
  const [InnerText, setInnerText] = useState(text);

  const changeText = (text: any) => {
    setInnerText(text);
  };

  return (
    <>
      <ButtonWrapper onMouseDown={() => getSet(changeText)}>
        <ButtonText>{InnerText}</ButtonText>
      </ButtonWrapper>
    </>
  );
};

export default Button;
