import { PropsWrapper } from "./PropertiesBoxElements"

type props = {
    properties: any
}

const PropertiesBox = ({properties}: props) => {
    return (
        <>
            <PropsWrapper>
                {properties.text}
                {properties.width}
            </PropsWrapper>
        </>
    )
}

export default PropertiesBox
