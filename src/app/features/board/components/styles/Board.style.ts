import { SHAPES } from "src/tetrominoes";
import styled from "styled-components"

export const StyledContainer = styled.div<{ rows: number; cols: number }>`
  grid-template-columns: ${({ cols }) => `repeat(${cols}, minmax(0 ,1fr))`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, minmax(0 ,1fr))`};
`

export const StyledCell = styled.div<{ tetromino: SHAPES | undefined }>`
background-color: ${({ tetromino }) => getCellColor(tetromino)}
`
const getCellColor = (tetromino: SHAPES | undefined) => {
  switch (tetromino) {
    case SHAPES.i:
      return "rgba(80, 227, 230, 1);"
    case SHAPES.j:
      return "rgba(36, 95, 223, 1);"
    case SHAPES.t:
      return "rgba(132, 61, 198, 1);"
    case SHAPES.l:
      return "rgba(223, 173, 36, 1);"
    case SHAPES.o:
      return "rgba(223, 217, 36, 1);"
    case SHAPES.s:
      return "rgba(48, 211, 56, 1);"
    case SHAPES.z:
      return "rgba(240, 80, 195, 1);"
    default:
      return "rgb(0 0 0 / 0.9);"
  }
}
