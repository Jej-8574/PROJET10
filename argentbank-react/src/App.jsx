import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  // Simulate sign-in: accepts the demo users from the README (Steve and Tony)
  function handleSignIn(username, password) {
    const users = {
      steve: { firstName: 'Steve', lastName: 'Rogers', password: 'password123' },
      tony: { firstName: 'Tony', lastName: 'Stark', password: 'password123' },
    }
    const user = users[username.toLowerCase()]
    if (user && user.password === password) {
      setIsLoggedIn(true)
      setCurrentUser(user)
      return true
    }
    return false
  }

  function handleSignOut() {
    setIsLoggedIn(false)
    setCurrentUser(null)
  }

  return (
    <BrowserRouter>
      <Navbar
        isLoggedIn={isLoggedIn}
        userName={currentUser?.firstName}
        onSignOut={handleSignOut}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn onSignIn={handleSignIn} />} />
        <Route path="/profile" element={<User user={currentUser} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
