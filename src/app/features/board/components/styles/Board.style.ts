import styled from "styled-components"

export const StyledDiv = styled.div<{ rows: number; cols: number }>`
  grid-template-columns: ${({ cols }) => `repeat(${cols}, minmax(0 ,1fr))`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, minmax(0 ,1fr))`};
`
