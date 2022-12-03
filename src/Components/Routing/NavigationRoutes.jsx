import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import UserProfile from '../pages/UserProfile'
const NavigationRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/userProfile' element={<UserProfile/>}/>
        </Routes>
    </div>
  )
}

export default NavigationRoutes