import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import TopNav from './TopNav'

const Layout = ({children}) => {
  return (
    <div>
        <TopNav />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
