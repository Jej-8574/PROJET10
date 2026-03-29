import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import User from './pages/User/User'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  const handleSignIn = (name) => {
    setIsLoggedIn(true)
    setUserName(name || 'Tony Jarvis')
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
    setUserName('')
  }

  return (
    <BrowserRouter>
      <Navbar
        isLoggedIn={isLoggedIn}
        userName={userName}
        onSignOut={handleSignOut}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn onSignIn={handleSignIn} />} />
        <Route path="/user" element={<User userName={userName} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
