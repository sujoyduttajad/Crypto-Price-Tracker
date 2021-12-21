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
