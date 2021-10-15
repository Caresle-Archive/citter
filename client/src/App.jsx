// Imports exclusive for this component
import { useState, useEffect } from "react"
import './App.css'

// Import others components
import PageControl from "./components/PageControl.jsx"

// import methods
import axios from 'axios'

const url = 'http://localhost:3001'
const localStorage = window.localStorage

const App = () => {
  const [page, setPage] = useState('feed')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [citterContent, setCitterContent] = useState([])
  const [user, setUser] = useState() 
  const [userProfile, setUserProfile] = useState(false)
  
  useEffect(() => {
    axios.get(`${url}/message`)
      .then(response => setCitterContent([...response.data]))
  }, [])

  const newCitter = (e) => {
		e.preventDefault()
    const textArea = document.getElementById("citter-message")
    const message = textArea.value
    if (!message) {
      return
    }
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    const obj = {
      message,
      media: {
        typeUrl: '',
        src: ''
      },
      social: {
        comments: 0,
        shares: 0,
        likes: 0
      }
    }
    axios.post(`${url}/message`, obj, config)
      .then(({data}) => setCitterContent([...citterContent, data]))
    textArea.value = ''
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
    if (nextPage === 'profile') setUserProfile(true)
    else setUserProfile(false)
    setPage(nextPage)
  }

  const handleOnChange = (state, value) => {
    if (state === 'username') {
      setUsername(value)
    }
    if (state === 'password') {
      setPassword(value)
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post(`${url}/login`, {
      username,
      password
    })
    .then(response => {
      setUser(response.data)
      localStorage.setItem('token', response.data.token)
    })
    .catch(error => console.log(error))
  }

  return (
    <main>
      <PageControl 
        page={page}
        user={user}
        changePage={changePage}
        citterContent={citterContent}
        url={url}
        userProfile={userProfile}
        newCitter={newCitter}
        handleLogin={handleLogin}
        handleOnChange={handleOnChange}
      />
    </main>
  )
}

export default App
