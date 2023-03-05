import defaultCell from "./components/defaultCell"

type Props = {
    rows: number,
    columns: number
}
export const buildBoard = ({ rows, columns }: Props) => {
    const builtRows = Array.from({ length: rows }, () => (
        Array.from({ length: columns }, () => ({ ...defaultCell })))
    )

    return {
        rows: builtRows,
        size: { rows, columns }
    }
}