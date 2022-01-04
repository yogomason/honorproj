import { ButtonText, ButtonWrapper } from "./ButtonElements"
import { ButtonProps } from "../../types"


const Button = ({keyprop, deleteItem}: ButtonProps) => {
    return (
        <>
            <ButtonWrapper width={200} height={100} backgroundColor={"#fff"} onMouseDown={() => deleteItem(keyprop)}>
                <ButtonText>
                    Click Me!
                </ButtonText>
            </ButtonWrapper>
        </>
    )
}

export default Button
