import { useRef } from "react";
import img from "../img/logo2.jpg";
import { Link } from "react-router-dom";
import axios from 'axios';
import kakaoLogin from '../img/kakao.png';
import naverLogin from '../img/naver2.png';

export default function LoginForm({ handleLogin }) {
    const usernameRef = useRef();
    const pwdRef = useRef();

    const handleClick = async (e) => {
        e.preventDefault(); // 기본 제출 동작 방지

        const username = usernameRef.current.value;
        const password = pwdRef.current.value;

        if (username === "") {
            alert('사용자 이름 또는 이메일을 입력하세요.');
            usernameRef.current.focus();
            return;
        }
        if (password === "") {
            alert('비밀번호를 입력하세요.');
            pwdRef.current.focus();
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/login', {
                username,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                const token = response.headers['authorization']; // 응답 헤더에서 토큰 추출
                const username = response.headers['username'];
                const data = response.data;

                if (!token) {
                    throw new Error('토큰이 없습니다.');
                }

                // JWT를 로컬 스토리지에 저장
                localStorage.setItem('token', token);
                // 사용자 정보를 로컬 스토리지에 저장
                localStorage.setItem('user', JSON.stringify(data));
                localStorage.setItem('username', username);

                handleLogin(username); // 로그인 성공 후 처리
            } else {
                console.error('로그인 실패');
                alert('로그인에 실패했습니다. 다시 시도하세요.');
            }
        } catch (error) {
            console.error('로그인 오류:', error);
            alert('로그인에 실패했습니다. 다시 시도하세요.');
        }
    };

    return (
        <div className='w-11/12 max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl'>
            <div className='max-w-sm mx-auto space-y-4'>
                <div className="flex justify-center">
                    <img src={img} alt="Logo" />
                </div>
                <form onSubmit={handleClick}>
                    <div>
                        <label htmlFor="username" className="block py-1 font-semibold text-xl">사용자 이름 또는 이메일</label>
                        <input ref={usernameRef} type="text" id="usernameOrEmail" className="border w-full py-2 px-2 rounded shadow hover:border-green-600 ring-1 ring-inset ring-gray-300 font-mono" autoComplete="username" />
                    </div>
                    <div>
                        <label htmlFor="pw" className="block py-1 font-semibold text-xl">비밀번호</label>
                        <input ref={pwdRef} type="password" id="pw" className="border w-full py-2 px-2 rounded shadow hover:border-green-600 ring-1 ring-inset ring-gray-300 font-mono" autoComplete="current-password" />
                    </div>
                    <div className="flex gap-3 pt-3 items-center">
                        <button type="submit" className="border hover:border-green-600 px-4 py-2 font-semibold rounded-lg shadow ring-1 ring-inset ring-gray-300">로그인</button>
                        <a href="#">비밀번호를 잊으셨나요?</a>
                    </div>
                </form>
                <div className="flex items-center justify-center text-xl font-serif text-zinc-700 font-normal"><h1> -others- </h1></div>
                <div className="flex items-center justify-center h-12 dark:bg-gray-800 m-2">
                    <button className="items-center justify-center w-72 px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 bg-naver-green">
                        <img className="w-6 h-6" src={naverLogin} loading="lazy" alt="naver login" />
                        <span className="flex-grow text-center text-white">네이버로 로그인하기</span>
                    </button>
                </div>
                <div className="flex items-center justify-center h-12 dark:bg-gray-800 m-2">
                    <button className="items-center justify-center w-72 px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 bg-kakao-yellow">
                        <img className="w-6 h-6" src={kakaoLogin} loading="lazy" alt="kakao login" />
                        <span className="flex-grow text-center">카카오로 로그인하기</span>
                    </button>
                </div>
                <div className="flex items-center justify-center h-12 dark:bg-gray-800 m-2">
                    <button className="flex items-center w-72 px-4 py-2 border gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                        <span className="flex-grow text-center">구글로 로그인하기</span>
                    </button>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <Link to="/join">
                        <button className="border hover:border-green-600 mt-3 px-4 py-2 font-semibold rounded-lg shadow ring-1 ring-inset ring-gray-300">회원가입</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
