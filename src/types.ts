export type FrameItemProps = {
    child: JSX.Element
    key: number
}

export type ButtonProps = {
    keyprop: number
    deleteItem: (key: number) => void
    editItem: (key: number) => void
}

export type FrameProps = {
    children: FrameItemProps[]
    open: boolean
    openFunction: () => void
    addFrameItems: (item: string) => void

}

export type ToolboxProps = {
    open: boolean
    openFunction: () => void
    addFrameItems: (item: string) => void

}

export type EditProps = {
    element?: FrameItemProps
}