import { Provider } from "react-redux"
import BodyComp from "./components/Body"
import appStore from "./utils/store/appStore"

function App() {

  return (
    <Provider store={appStore}>
      <BodyComp />
    </Provider>
  )
}

export default App
