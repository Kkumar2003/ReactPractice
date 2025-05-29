import React from 'react'
import { Outlet } from "react-router-dom"
import  Header  from "../components/hooks/Header"
import  Footer  from "../components/hooks/Footer"

const AppLayouts = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayouts