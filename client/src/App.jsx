import TopBar from "./components/TopBar/TopBar.jsx"
import ContentContainer from "./components/Content/ContentContainer.jsx"
import ButtonCittear from "./components/Content/ButtonCittear/ButtonCittear.jsx"
import BottomBar from "./components/BottomBar/BottomBar.jsx"
import './App.css'
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx"
import SideBar from './components/SideBar/SideBar.jsx'
import NewCitter from "./components/Content/NewCitter/NewCitter.jsx"
import { useState } from "react"


const App = () => {
  const [sideBar, setSideBar] = useState(false)
  const [profilePage, setProfilePage] = useState(false)
  const [feed, setFeed] = useState(true)
  const [citterMessage, setCitterMessage] = useState(false)

  const showProfilePage = () => {
    setProfilePage(true)
    setSideBar(false)
    setCitterMessage(false)
  }

  const showSideBar = () => {
    setSideBar(true)
    setFeed(false)
    setCitterMessage(false)
  }

  const showFeed = () => {
    setFeed(true)
    setProfilePage(false)
    setCitterMessage(false)
  }

  const newCitterMessage = () => {
    setFeed(false)
    setProfilePage(false)
    setCitterMessage(true)
  }

  const cancelCitterMessage = () => {
    setFeed(true)
    setProfilePage(false)
    setCitterMessage(false)
  }

  window.addEventListener('click', (e) => {
    const sideBar = document.getElementById('sidebar')
    if (!sideBar) return
    if (sideBar.offsetWidth <= e.offsetX) {
      setFeed(true)
      setSideBar(false)
      setProfilePage(false)
    }
  })

  if (!sideBar && !profilePage && feed && !citterMessage) {
    return (
      <main>
        <TopBar showSideBar={showSideBar} />
        <ContentContainer />
        <ButtonCittear cittear={newCitterMessage}/>
        <BottomBar showFeed={showFeed}/>
      </main>
    )
  }

  if (citterMessage) {
    return (
      <main>
        <NewCitter cancelCitter={cancelCitterMessage}/>
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
