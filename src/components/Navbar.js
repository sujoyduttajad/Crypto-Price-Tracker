import React from 'react'
import Logo from '../images/coinize2.svg'

const Navbar = ({
    handleChange
}) => {
    return (
        <nav className='coin-search'>
            <div className='coin-logo-container'>
                <img className='coin-logo' src={Logo} alt="logo" />
            </div>
            <div className='coin-pages-container'>
                <h3>Market</h3>
            </div>
            <div className='coin-pages-container'>
                <h3>Exchange</h3>
            </div>
            <div className='coin-pages-container'>
                <h3>Categories</h3>
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
