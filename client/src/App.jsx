import TopBar from "./components/TopBar/TopBar.jsx"
import ContentContainer from "./components/Content/ContentContainer.jsx"
import BottomBar from "./components/BottomBar/BottomBar.jsx"
import './App.css'

const App = () => {
  return (
    <main>
      <TopBar />
      <ContentContainer />
      <BottomBar />
    </main>
  )
}

export default App
