import { ShapeNames } from "src/tetrominoes"

export type BoardType = {
  rows: {
    occupied: boolean
    shapeName: ShapeNames | undefined
    ghost: boolean
  }[][]
  size: {
    rows: number
    columns: number
  }
}
