import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/books'>Books</Link>
        </div>
    )
}

export default NavBar