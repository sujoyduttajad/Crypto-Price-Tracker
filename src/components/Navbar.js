import React from 'react'

const Navbar = ({
    handleChange
}) => {
    return (
        <div className='coin-search'>
            <h1 className="coin-text">Crypto Price Tracker</h1>
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
