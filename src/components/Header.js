import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from './Logo';
// import HeaderInput from './HeaderInput';

function Header() {
	return (
		<div className="fixed top-0 inset-x-0 flex flex-col z-10">
			<div className="w-full bg-[#f38227] h-[3px]" />
			<header className="h-[47px] bg-[#f7faf9] flex flex-row items-center shadow-1top text-[13px] ">
				<div className="w-[1350px] h-full flex items-center mx-auto my-0 max-w-full">
					{/* <Logo /> */}
					<div className="w-[82px] h-[33px] cursor-pointer flex items-center justify-center rounded-[30px] hover:bg-[hsl(210,8%,90%)] whitespace-nowrap">
						<span>About</span>
					</div>
					<div className="w-[82px] h-[33px] cursor-pointer flex items-center justify-center rounded-[30px] hover:bg-[hsl(210,8%,90%)] whitespace-nowrap">
						<span>Product</span>
					</div>
					<div className="w-[82px] h-[33px] cursor-pointer flex items-center justify-center rounded-[30px] hover:bg-[hsl(210,8%,90%)] whitespace-nowrap">
						<span>For Teams</span>
					</div>
					{/* <HeaderInput /> */}
					<nav>
						<ol className="list-none">
							<li className="border-solid float-left flex  h-[34px]  ">
								<Link
									to="/login"
									type="button"
									className="w-[60px] flex items-center justify-center border-[#37739c] hover:bg-[#b3d3e9] text-[#37739c] bg-[#e0ecf3] text-[13px] border-[0.5px] rounded-[3px] "
								>
									Log in
								</Link>
							</li>
							<li className=" ml-[4px] float-left flex h-[34px]  text-[13px] ">
								<Link
									to="/signup"
									type="button"
									className=" flex items-center w-[68px] justify-center  text-white  border-[0.5px] rounded-[3px] hover:bg-[#0074CC] bg-[#0a94ff]"
								>
									Sign up
								</Link>
							</li>
						</ol>
					</nav>
				</div>
			</header>
		</div>
	);
}

export default Header;
