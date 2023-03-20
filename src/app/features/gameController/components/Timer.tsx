import { useInterval } from "src/app/hooks/useInterval"
import { Action } from "../types"

type Props = {
  dropTime: number
  handleInput: ({ action }: { action: Action }) => void
}
const Timer = ({ dropTime, handleInput }: Props) => {
  useInterval(() => handleInput({ action: Action.SLOWDROP }), dropTime)
  return <></>
}

export default Timer
