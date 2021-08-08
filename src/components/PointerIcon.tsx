
export enum Direction {
   RIGHT,
   DOWN,
   LEFT,
   UP
}

export const PointerDirectionMap = new Map()
        .set(Direction.LEFT, <>&#128072;</>)
        .set(Direction.RIGHT, <>&#128073;</>)
        .set(Direction.UP, <>&#128070;</>)
        .set(Direction.DOWN, <>&#128071;</>)

export interface PointerIconProps {
    direction: Direction;
}

export const PointerIcon = ({ direction }: PointerIconProps) => {
    
    return <>{PointerDirectionMap.get(direction)}
    </>
}