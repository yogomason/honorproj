export type FrameItemProps = {
    child: JSX.Element
    key: number
}

export type ButtonProps = {
    keyprop: number
    deleteItem: (key: number) => void
}

export type FrameProps = {
    children: FrameItemProps[]
    open: boolean
    openFunction: () => void
    addFrameItems: (item: string) => void
    deleteFrameItem: (key: number) => void
}

export type ToolboxProps = {
    open: boolean
    openFunction: () => void
    addFrameItems: (item: string) => void
    deleteFrameItem: (key: number) => void
}
