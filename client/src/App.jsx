// Imports exclusive for this component
import { useState } from "react"
import './App.css'

// Import others components
import TopBar from "./components/NavBar/TopBar/TopBar.jsx"
import ContentContainer from "./components/Content/ContentContainer.jsx"
import BtnCittear from "./components/Buttons/BtnCittear"
import BottomBar from "./components/NavBar/BottomBar/BottomBar.jsx"
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx"
import SideBar from './components/NavBar/SideBar/SideBar.jsx'
import NewCitter from "./components/Content/NewCitter/NewCitter.jsx"
import Notifications from "./components/Notifications/Notifications.jsx"
// import methods
import { getFeed, addCitter } from './helpers'


const App = () => {
  const [page, setPage] = useState('feed')

  const [citterContent, setCitterContent] = useState([...getFeed()])

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
      setPage('feed')
    }
  })

  const changePage = nextPage => event => {
    setPage(nextPage)
  }

  const content = () => {
    if (page === 'feed') {
      return (
        <>
          <TopBar showSideBar={changePage}/>
          <ContentContainer citterMessage={citterContent} />
          <BtnCittear cittear={changePage} />
          <BottomBar changePage={changePage}/>
        </>
      )
    } else if (page === 'sidebar') {
      return (
        <>
          <SideBar changePage={changePage}/>
        </>
      )
    } else if (page === 'profile') {
      return (
        <>
          <ProfilePage />
          <ContentContainer 
            userProfile={true}
            citterMessage={citterContent}
          />
          <BtnCittear cittear={changePage}/>
          <BottomBar changePage={changePage}/>
        </>
      )
    } else if (page === 'notifications') {
      return (
        <>
          <Notifications />
          <BottomBar changePage={changePage}/>
        </>
      )
    } else if (page === 'newCitter') {
      return (
        <>
          <NewCitter cancelCitter={changePage} submitCitter={submit} />
        </>
      )
    }
  }

  return (
    <main>
      {content()}
    </main>
  )
}

export default App
