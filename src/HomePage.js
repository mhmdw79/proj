import React from 'react'
import Main from "./components/Main";
import Navbar from "./components/Navbar";
export const HomePage = () => {
  return (
    <div className="w-full h-full flex">
      <Navbar/>
      <Main/>
    </div>
  )
}
