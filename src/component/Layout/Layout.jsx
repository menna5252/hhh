import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-6  pt-[60px] pb-6">
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
