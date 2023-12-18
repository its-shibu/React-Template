import React from 'react'
import { Link } from 'react-router-dom'
import './first.css'
const First = () => {
  return (
    <>
    <table border={2} border-color='red'>
        <thead>
            <tr>
                <th>S.No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Shibu</td>
                <td>Subba</td>
                <td>9818647289</td>
                <td>shibusubba123@gmail.com</td>
            </tr>
        </tbody>
    </table>

    <Link to={'/second'}  className = 'custom-link'>Go to Second Page</Link>
    </>
  )
}

export default First