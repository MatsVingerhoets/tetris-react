import { Action } from "./types"

export const Controls = {
  ArrowUp: Action.ROTATE,
  ArrowDown: Action.SLOWDROP,
  ArrowLeft: Action.LEFT,
  ArrowRight: Action.RIGHT,
  KeyQ: Action.QUIT,
  Space: Action.FASTDROP
}

export const actionForKey = (keyCode: keyof typeof Controls) =>
  Controls[keyCode]
