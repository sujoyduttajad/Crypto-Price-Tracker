import React from 'react'
import Logo from '../images/coinize2.svg'
import { Link } from "react-router-dom"

const Navbar = ({ handleChange }) => {
    return (
        <nav className='coin-search'>
            <div className='coin-logo-container'>
                <Link to="/">
                    <div className='coin-image-container'>
                        <img className='coin-logo' src={Logo} alt="logo" />
                    </div>
                </Link>
                <Link to="/">
                    <div className='coin-pages-container'>
                        <h3>Market</h3>
                    </div>
                </Link>
                <Link to="/exchange">
                    <div className='coin-pages-container'>
                        <h3>Exchange</h3>
                    </div>
                </Link>
                <Link to="/categories">
                    <div className='coin-pages-container'>
                        <h3>Categories</h3>
                    </div>
                </Link>
            </div>
            
            <form className='coin-input-container'>
                <input 
                    type="text" 
                    placeholder="Search a currency"
                    className="coin-input"
                    onChange={handleChange}
                />
            </form>
      </nav>
    )
}

export default Navbar
