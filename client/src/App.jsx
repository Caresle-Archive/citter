import TopBar from "./components/TopBar/TopBar.jsx"
import ContentContainer from "./components/Content/ContentContainer.jsx"
import ButtonCittear from "./components/Content/ButtonCittear/ButtonCittear.jsx"
import BottomBar from "./components/BottomBar/BottomBar.jsx"
import './App.css'
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx"
import SideBar from './components/SideBar/SideBar.jsx'
import { useState } from "react"


const App = () => {
  const [sideBar, setSideBar] = useState(false)
  const [profilePage, setProfilePage] = useState(false)
  const [feed, setFeed] = useState(true)

  const showProfilePage = () => {
    setProfilePage(true)
    setSideBar(false)
  }

  const showSideBar = () => {
    setSideBar(true)
    setFeed(false)
  }

  const showFeed = () => {
    setFeed(true)
    setProfilePage(false)
  }

  if (!sideBar && !profilePage && feed) {
    return (
      <main>
        <TopBar showSideBar={showSideBar} />
        <ContentContainer />
        <ButtonCittear />
        <BottomBar showFeed={showFeed}/>
      </main>
    )
  }
  if (sideBar) {
    return (
      <main>
        <SideBar showProfile={showProfilePage} />
      </main>
    )
  }
  return (
    <main>
      <ProfilePage />
      <ButtonCittear />
      <BottomBar showFeed={showFeed}/>
    </main>
  )
}

export default App
