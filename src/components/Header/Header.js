import React from 'react';
import logo from './logo.png'
const Header = () => {
    return (
        <div className='header flex align-middle '>
            <div className="logo mr-3">
                <img className='w-12 h-12' src={logo} alt="Logo"  />
            </div>
            <h1 className='uppercase text-3xl font-bold text-[#3F3679] mt-2 tracking-tighter'>Coders Exploring Zone</h1>
        </div>
    );
};

export default Header;