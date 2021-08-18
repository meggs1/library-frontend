import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to='/'>Home</Link> <Link to='/books'>Books</Link> <Link to='/books/new'>Add Book</Link>
        </div>
    )
}

export default NavBar