import { ShapeNames } from "src/tetrominoes"

export type BoardType = {
  rows: {
    occupied: boolean
    shapeName: ShapeNames | undefined
  }[][]
  size: {
    rows: number
    columns: number
  }
}
