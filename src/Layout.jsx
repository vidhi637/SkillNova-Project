import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Layout
