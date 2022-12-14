import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import HeaderInput from './HeaderInput';

function LoginHeader() {
	const [user, setUser] = useState({});

	useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));
		if (userInfo !== null) {
			setUser(userInfo);
		}
	}, []);

	return (
		<div className="fixed top-0 inset-x-0 flex flex-col z-10">
			<div className="w-full bg-[#f38227] h-[3px]" />
			<header className="h-[47px] bg-[#f7faf9] flex flex-row items-center shadow-1top text-[13px]">
				<div className=" h-full flex items-center mx-auto my-0 max-w-full">
					<Logo />
					<div className="rounded-[30px] w-[76px] h-[28px] cursor-pointer flex items-center justify-center hover:bg-[hsl(210,8%,90%)] whitespace-nowrap">
						<span>Product</span>
					</div>
					<HeaderInput />
					<nav className="flex items-center h-full">
						<Link
							to="/mypage"
							className="flex items-center hover:bg-[hsl(210,8%,90%)] cursor-pointer h-full"
						>
							<img src={user?.profileImage} alt="userProfile" className="w-4" />
							<div className="mr-1 pl-[5px] ">{user.displayName}</div>
						</Link>
						<div className="flex justify-center h-full items-center w-[40px] cursor-pointer px-[10px] hover:bg-[hsl(210,8%,90%)]">
							<svg className="w-[20px] h-[18px]">
								<path d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z" />
							</svg>
						</div>
						<div className="flex justify-center h-full items-center cursor-pointer w-[40px] px-[10px] hover:bg-[hsl(210,8%,90%)]">
							<svg
								aria-hidden="true"
								className="w-[18px] h-[18px]"
								viewBox="0 0 18 18"
							>
								<path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z" />
							</svg>
						</div>
						<div className="flex justify-center h-full items-center w-[40px] cursor-pointer px-[10px] hover:bg-[hsl(210,8%,90%)]">
							<svg className="w-[18px] h-[18px] ">
								<path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z" />
							</svg>
						</div>
						<ol className="list-none px-[10]">
							<li className=" ml-[4px] float-left flex h-[34px]  text-[13px] ">
								<Link
									to="/logout"
									type="botton"
									className=" flex items-center w-[68px] justify-center  text-white border-[0.5px] rounded-[3px] hover:bg-[#0074CC] bg-[#0a94ff]"
								>
									Log out
								</Link>
							</li>
						</ol>
					</nav>
				</div>
			</header>
		</div>
	);
}

export default LoginHeader;
