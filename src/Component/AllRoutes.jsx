import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupForm from './Signup'
import InfiniteScroll from './InfiniteScroll'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/InfiniteScrolling' element={<InfiniteScroll/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
