import React from 'react'
import Logo from '../images/coinize.svg'

const Navbar = ({
    handleChange
}) => {
    return (
        <div className='coin-search'>
            <div>
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