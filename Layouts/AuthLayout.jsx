import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function AuthLayout() {
  return (
<div className="flex flex-col lg:flex-row min-h-screen">
  <div className="w-full lg:w-1/2">
    <Header />
  </div>

  <div className="w-full lg:w-1/2 flex justify-center items-center bg-white backdrop-blur-2xl py-8 overflow-auto">
    <div className="border-2 border-gray-400 px-4 py-8 w-full max-w-md rounded-2xl shadow-2xl">
      <Outlet />
    </div>
  </div>
</div>
  )
}