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
  const [page, setPage] = useState('signup')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [citterContent, setCitterContent] = useState([])
  const [user, setUser] = useState() 
  const [userProfile, setUserProfile] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

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

  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth)
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
      setPage("feed")
      localStorage.setItem('token', response.data.token)
    })
    .catch(error => console.log(error))
  }

  const handleSignup = (e) => {
    e.preventDefault()
    const formChilds = document.querySelector('form').childNodes
    const newUser = {
      name: '',
      username: '',
      password: '',
      password2: ''
    }

    for (let i = 0; i <= 2; i++) {
      if (formChilds[i].tagName === 'INPUT') {
        if (i === 0) newUser.username = formChilds[i].value
        if (i === 1) newUser.password = formChilds[i].value
        if (i === 2) newUser.password2 = formChilds[i].value
      }
    }
    newUser.name = newUser.username
    if (newUser.password !== newUser.password2) {
      alert('Password doesn\'t match')
      return
    }

    axios.post(`${url}/users`, newUser)
      .then(response => {
        if (response.status === 201) {
          setPage('login')
        }
      })
      .catch(err => console.log(err))
  }

  const handleSocialInteraction = (social, id) => (e) => {
		const socialToUpdate = {
			like: false,
			share: false,
			comment: false
		}
		if (social === 'like') {
      socialToUpdate.like = true
      const card = document.getElementById(`social-item-like-${id}`)
      const value = card.childNodes[1].innerHTML
      card.childNodes[1].innerHTML = parseInt(value) + 1
      
    }
		if (social === 'share') {
      socialToUpdate.share = true
      const card = document.getElementById(`social-item-share-${id}`)
      const value = card.childNodes[1].innerHTML
      card.childNodes[1].innerHTML = parseInt(value) + 1
    }
    axios.post(`${url}/message/${id}`, socialToUpdate)
      .catch(err => console.log(err))
	}

  return (
    <main>
      <PageControl 
        page={page}
        windowSize={windowSize}
        user={user}
        changePage={changePage}
        citterContent={citterContent}
        url={url}
        userProfile={userProfile}
        newCitter={newCitter}
        handleLogin={handleLogin}
        handleOnChange={handleOnChange}
        handleSignup={handleSignup}
        onSocialInteraction={handleSocialInteraction}
      />
    </main>
  )
}

export default App
