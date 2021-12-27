import { useState } from "react";
import PropertiesBox from "../PropertiesBox/PropertiesBox";
import { ButtonText, ButtonWrapper } from "./ButtonElements";

type props = {
  text: string;
};

const Button = ({ text }: props) => {
  const [properties, setProperties] = useState({
    text: text,
    width: 10,
  });

  

  return (
    <>
      <ButtonWrapper>
        <ButtonText>{properties.text}</ButtonText>
        <PropertiesBox properties={properties} />
      </ButtonWrapper>
    </>
  );
};

export default Button;
