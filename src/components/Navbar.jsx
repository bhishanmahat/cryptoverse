import React from 'react'
import {BsCoin} from 'react-icons/bs'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Link>
        <div className='navbar'>
            <BsCoin className='icon' />
            <h1> Crypto <span className='cyan'>Verse</span></h1>
        </div>
    </Link>
  )
}

export default Navbar