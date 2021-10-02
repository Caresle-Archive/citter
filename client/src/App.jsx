import TopBar from "./components/TopBar/TopBar.jsx"
import ContentContainer from "./components/Content/ContentContainer.jsx"
import ButtonCittear from "./components/Content/ButtonCittear/ButtonCittear.jsx"
import BottomBar from "./components/BottomBar/BottomBar.jsx"
import './App.css'

const App = () => {
  return (
    <main>
      <TopBar />
      <ContentContainer />
      <ButtonCittear />
      <BottomBar />
    </main>
  )
}

export default App
