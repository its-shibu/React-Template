import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'

const MyRoute = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/first' element={<First/>}/>
                <Route path='/second' element={<Second/>}/>
                <Route path='/third' element={<Third/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default MyRoute