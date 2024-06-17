import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from 'axios';
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import { isLogin, username } from "./StAtom";

export default function Login() {
    const [user, setUser] = useState(); 
    const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin);
    const [isu, setIsu] = useRecoilState(username);
    const [userData, setUserData] = useState(null); // State to hold user data fetched with Axios

    const handleLogin = (u) => {
        localStorage.setItem('user', u);
        setUser(u);
        setIsLoginCheck(true);
        setIsu(u);
        // fetchUserData(u); // Fetch user data after successful login
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setIsLoginCheck(false);
        setIsu(null);
        setUserData(null); // Clear user data on logout
    }
    return (
        <div>
            <div className='flex items-center justify-center min-h-screen'>
                {isLoginCheck ? <Logout user={user} handleLogout={handleLogout} /> : <LoginForm handleLogin={handleLogin} />}
            </div>
            {isLoginCheck && userData && (
                <div>
                    <p>{isu}</p>
                    <p>User Data:</p>
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
