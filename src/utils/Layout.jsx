import React from 'react'
import NavBar from '../components/NavBar/NavBar'

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout