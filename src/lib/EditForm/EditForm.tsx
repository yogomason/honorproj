//create an EditForm component that renders a form for editing a single item such as a button using typescript
//the form will have a submit button
// The form will take in a JSX Element as a prop and a method to update the props of the element
// the form will the fields name, width, height

import { useState } from "react"

const EditForm = ({element, updateElement}: {element: JSX.Element, updateElement: (element: JSX.Element) => void}) => { 
    const [name, setName] = useState(element.props.name)
    const [width, setWidth] = useState(element.props.width)
    const [height, setHeight] = useState(element.props.height)
    //state that holds the new props of the element
    const [newProps, setNewProps] = useState({
        name: name,
        width: width,
        height: height
    })

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        element.props.name = name
        element.props.width = width
        element.props.height = height
        updateElement(element)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Width:</label>
            <input type="text" value={width} onChange={(e) => setWidth(e.target.value)}/>
            <label>Height:</label>
            <input type="text" value={height} onChange={(e) => setHeight(e.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default EditForm

