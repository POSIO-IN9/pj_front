import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLogin, username } from './StAtom';

const Nav = () => {
    const isLoginCheck = useRecoilValue(isLogin);
    const isu = useRecoilValue(username);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between m-1 px-2 py-2 bg-cover bg-no-repeat bg-center bg-[url('./img/forrest1.jpg')]">
            <div className="text-xl lg:flex-grow flex items-center">
                <Link to="/main" className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    <span className="font-indie-flower font-extrabold text-white ml-4">farmhani</span>
                </Link>
            </div>
            <div className="text-xl flex items-center justify-center mr-5">
                <Link to="/gallery" className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    <span className="font-neucha font-bold text-white ml-4">Gallery</span>
                </Link>
            </div>
            <div className="text-xl flex items-center justify-center mr-5">
                <Link
                    to={isLoginCheck ? "/profile" : "/login"}
                    className="font-neucha inline-block text-sm px-2 py-2 leading-none border rounded font-bold text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
                >
                    {isLoginCheck ? isu : 'Sign In'}
                </Link>
            </div>
            <div className="lg:hidden">
                <button
                    className="menu-icon"
                    onClick={handleToggleMenu}
                >
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} icon text-white`}></i>
                </button>
            </div>
            <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="nav-menu flex flex-col items-center">
                    <Link
                        to="/gallery"
                        className="nav-links-mobile p-2 text-white"
                        onClick={handleToggleMenu}
                    >
                        Gallery
                    </Link>
                    <Link
                        to={isLoginCheck ? "/profile" : "/login"}
                        className="nav-links-mobile p-2 text-white"
                        onClick={handleToggleMenu}
                    >
                        {isLoginCheck ? isu : 'Sign In'}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
