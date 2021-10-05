// Imports exclusive for this component
import { useState } from "react"
import './App.css'

// Import others components
import TopBar from "./components/TopBar/TopBar.jsx"
import ContentContainer from "./components/Content/ContentContainer.jsx"
import ButtonCittear from "./components/Content/ButtonCittear/ButtonCittear.jsx"
import BottomBar from "./components/BottomBar/BottomBar.jsx"
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx"
import SideBar from './components/SideBar/SideBar.jsx'
import NewCitter from "./components/Content/NewCitter/NewCitter.jsx"

// import methods
import { getFeed, addCitter } from './helpers'


const App = () => {
  // States for handle the render of the differents part 
  // of the project
  const [sideBar, setSideBar] = useState(false)
  const [profilePage, setProfilePage] = useState(false)
  const [feed, setFeed] = useState(true)
  const [citterMessage, setCitterMessage] = useState(false)
  const [citterContent, setCitterContent] = useState([...getFeed()])
  /**
   * Hide the others tabs and allow to render the 
   * Profile page component
   */
  const showProfilePage = () => {
    setProfilePage(true)
    setSideBar(false)
    setCitterMessage(false)
  }

  /**
   * Hid the others tabs and allow to render the
   * SideBAr component
   */
  const showSideBar = () => {
    setSideBar(true)
    setFeed(false)
    setCitterMessage(false)
  }

  /**
   * Do the same that showSideBar & showProfilePage
   * but for the ContentContainer component
   */
  const showFeed = () => {
    setFeed(true)
    setProfilePage(false)
    setCitterMessage(false)
  }

  /**
   * Do the same that the before element
   * But for NewCitter component
   */
  const newCitterMessage = () => {
    setFeed(false)
    setProfilePage(false)
    setCitterMessage(true)
  }

  /**
   * Hide the CitterMessage component
   */
  const cancelCitterMessage = () => {
    setFeed(true)
    setProfilePage(false)
    setCitterMessage(false)
  }

  const submit = (e) => {
		e.preventDefault()
    const message = document.getElementById("citter-message").value
    console.log(message)
		addCitter(message)
    setCitterContent([...getFeed()])
	}

  /**
   * Check if the click is inside the side bar or not
   */
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
        <ContentContainer citterMessage={citterContent}/>
        <ButtonCittear cittear={newCitterMessage}/>
        <BottomBar showFeed={showFeed}/>
      </main>
    )
  }

  if (citterMessage) {
    return (
      <main>
        <NewCitter submitCitter={submit} cancelCitter={cancelCitterMessage}/>
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
      <ContentContainer citterMessage={citterContent} userProfile={true}/>
      <ButtonCittear />
      <BottomBar showFeed={showFeed}/>
    </main>
  )
}

export default App
