import React from 'react'
import { Link } from 'react-router-dom'
const Second = () => {
  return (
    <>
        this is the second component
        <Link to={'/First'} style={{"color":"red", "fontSize":"40px", "text-decoration": "none", "font-family":"Poppins", "font-weight": "bold"}}>Goto First Page</Link>
    </>
  )
}

export default Second