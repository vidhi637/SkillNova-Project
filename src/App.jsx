import React from 'react'
import Layout from './Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ContactForm from './Pages/ContactForm'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Pay from './Pages/Pay'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses/>} />
          <Route path="pay" element={<Pay/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
