import React from 'react'
import Logo from '../images/coinize2.svg'

const Navbar = ({
    handleChange
}) => {
    return (
        <div className='coin-search'>
            <div className='coin-logo-container'>
                <img className='coin-logo' src={Logo} alt="logo" />
            </div>
            <form>
                <input 
                    type="text" 
                    placeholder="Search a currency"
                    className="coin-input"
                    onChange={handleChange}
                />
            </form>
      </div>
    )
}

export default Navbar
