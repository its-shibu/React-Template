import React from 'react'
import Second from './Second'
import { Link } from 'react-router-dom'

const Third = () => {
  return (
    <div>
        <Second/><br/>
        <Link to ={'/first'}>Go to First page from third page</Link>
    </div>
  )
}

export default Third