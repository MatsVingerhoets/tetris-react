import { useState } from "react"
import { buildBoard } from "../utils"

type Props = {
    rows: number,
    columns: number
}
export const useBoard = ({ rows, columns }: Props) => {
    const [board, setBoard] = useState(buildBoard({ rows, columns }))

    return { board, setBoard }
}