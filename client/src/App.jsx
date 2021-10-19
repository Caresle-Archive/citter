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

  const handleSocialInteraction = social => (e) => {
		console.log(e.target, social)
    // const mainCard = socialCard.parentElement
		// const socialToUpdate = {
		// 	like: false,
		// 	share: false,
		// 	comment: false
		// }
		// if (social === 'like') socialToUpdate.like = true
		// if (social === 'share') socialToUpdate.share = true
		// if (social === 'comment') socialToUpdate.comment = true
    // console.log(mainCard.id, socialToUpdate)
    // axios.post(`${url}/message/${mainCard.id}`, socialToUpdate)
    //   .catch(err => console.log(err))
    // const socialValue = e.target.parentElement.childNodes[1]
    // socialValue.innerHTML = parseInt(socialValue.innerHTML) + 1
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
        handleSignup={handleSignup}
        onSocialInteraction={handleSocialInteraction}
      />
    </main>
  )
}

export default App
