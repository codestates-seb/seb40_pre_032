import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export default function App() {
	return (
		<header className="h-[47px] bg-[#f7faf9] flex flex-row items-center shadow-1top">
			<div className="w-[1264px] h-full flex items-center mx-auto my-0 max-w-full">
				<a
					href="https://stackoverflow.com/"
					className="cursor-pointer py-0 px-2 flex items-center bg-transparent w-[166px] h-[47px]"
				>
					<img
						alt="stackoverflow logo"
						src="src/img/stack.png "
						className="w-[150px] h-[30px]"
					/>
				</a>
				<div className="w-[82px] h-[33px] cursor-pointer flex items-center justify-center rounded-large hover:bg-[hsl(210,8%,90%)] whitespace-nowrap">
					<span>Product</span>
				</div>
				<form className="align-baseline text-[100%] px-2">
					<input className="cursor-text" />
					<HiMagnifyingGlass />
				</form>
			</div>
		</header>
	);
}
