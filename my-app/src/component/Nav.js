import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLogin, username } from './StAtom';

const NavLink = ({ to, className, children, onClick }) => (
    <Link to={to} className={className} onClick={onClick}>
        {children}
    </Link>
);

const Nav = () => {
    const isLoggedIn = useRecoilValue(isLogin);
    const savedUsername = useRecoilValue(username);
    const setIsLoggedIn = useSetRecoilState(isLogin);
    const setSavedUsername = useSetRecoilState(username);
    const [isOpen, setIsOpen] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true); // 초기 로딩 상태 추가

    useEffect(() => {
        const user = localStorage.getItem('user');
        const username = localStorage.getItem('username');
        if (user && username) {
            setIsLoggedIn(true);
            setSavedUsername(username);
        }
        setInitialLoad(false); // 초기 로딩 상태 변경
    }, [setIsLoggedIn, setSavedUsername]);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // 초기 로딩 상태에서는 아무 것도 렌더링하지 않음
    if (initialLoad) {
        return null;
    }

    return (
        <nav className="flex items-center justify-between m-1 px-2 py-2 bg-cover bg-no-repeat bg-center bg-[url('./img/forrest1.jpg')]">
            <div className="flex items-center text-xl">
                <NavLink to="/main" className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    <span className="font-indie-flower font-extrabold text-white ml-4">farmhani</span>
                </NavLink>
            </div>
            <div className="lg:hidden">
                <button className="menu-icon" onClick={handleToggleMenu}>
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} icon text-white`}></i>
                </button>
            </div>
            <div className={`flex items-center justify-center text-xl ${isOpen ? 'flex' : 'hidden md:flex'}`}>
                <NavLink to="/gallery" className="block lg:inline-block lg:mt-0 md:mr-4 text-teal-200 hover:text-white">
                    <span className="font-neucha font-bold text-white ml-4">Gallery</span>
                </NavLink>
                <div className="flex items-center">
                    {isLoggedIn ? (
                        <NavLink
                            to="/profile"
                            className="font-neucha inline-block text-sm px-2 py-2 leading-none border rounded font-bold text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
                        >
                            {savedUsername}
                        </NavLink>
                    ) : (
                        <NavLink
                            to="/login"
                            className="font-neucha inline-block text-sm px-2 py-2 leading-none border rounded font-bold text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
                        >
                            Sign In
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
