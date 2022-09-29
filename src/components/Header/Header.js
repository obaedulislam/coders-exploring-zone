import React from 'react';
import logo from './logo.png'
const Header = () => {
    return (
        <div className='header flex items-center md:justify-start justify-center  '>
            <div className="logo mr-3">
                <img className='lg:w-12 lg:h-12 md:h-8 md:w-8' src={logo} alt="Logo"  />
            </div>
            <h1 className='uppercase lg:text-3xl md:text-xl sm:text-md font-bold text-[#3F3679]  tracking-tighter'>Coders Exploring Zone</h1>
        </div>
    );
};

export default Header;