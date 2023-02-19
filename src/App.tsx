import { Game } from "./app/features/game"
import { Provider } from "jotai"
function App() {
  return (
    <Provider>
      <Game />
    </Provider>
  )
}

export default App
