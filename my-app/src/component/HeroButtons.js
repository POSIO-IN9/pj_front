import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeroButtons() {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="hero-btns flex">
            <Link to="/main">
            <button
                className={` md:text-xl lg:text-2xl xl:text-3xl kanit-bold-italic px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-l-lg transition duration-300 ${isHovered ? 'hover:bg-white hover:text-green-500' : ''}`}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
               <p> Get Started</p>
            </button>
            </Link>
            
            <Link to="/info">
            <button
                className={` md:text-xl lg:text-2xl xl:text-3xl kanit-bold-italic px-8 py-4 bg-none border-2 border-white text-black text-lg font-semibold rounded-r-lg transition duration-300 ${isHovered ? 'hover:border-white hover:bg-white text-white hover:text-green-500' : 'bg-white'}`}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
               <p>let's go</p> 
            </button>
            </Link>
        </div>
    );
};

