import { ShapeNames } from "src/tetrominoes"
import styled from "styled-components"

export const StyledContainer = styled.div<{ rows: number; cols: number }>`
  grid-template-columns: ${({ cols }) => `repeat(${cols}, minmax(0 ,1fr))`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, minmax(0 ,1fr))`};
`

export const StyledCell = styled.div<{
  tetromino: ShapeNames | undefined
  ghost: boolean
}>`
  background-color: ${({ tetromino, ghost }) =>
    ghost ? "rgba(0, 0, 0, 0.9);" : getCellColor(tetromino)};
  border: ${({ ghost }) => (ghost ? "2px solid rgba(255,255,255, 0.4)" : "")};
`
const getCellColor = (tetromino: ShapeNames | undefined) => {
  switch (tetromino) {
    case ShapeNames.I:
      return "rgba(80, 227, 230, 1);"
    case ShapeNames.J:
      return "rgba(36, 95, 223, 1);"
    case ShapeNames.T:
      return "rgba(132, 61, 198, 1);"
    case ShapeNames.L:
      return "rgba(223, 173, 36, 1);"
    case ShapeNames.O:
      return "rgba(223, 217, 36, 1);"
    case ShapeNames.S:
      return "rgba(48, 211, 56, 1);"
    case ShapeNames.Z:
      return "rgba(240, 80, 195, 1);"
    default:
      return "rgb(0 0 0 / 0.9);"
  }
}
