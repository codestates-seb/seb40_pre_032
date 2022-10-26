import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export default function App() {
	return (
		<header className="h-[47px] bg-[#f7faf9] flex flex-row items-center shadow-1top text-[13px]">
			<div className="w-[1264px] h-full flex items-center mx-auto my-0 max-w-full">
				<a
					href="https://stackoverflow.com/"
					className="cursor-pointer py-0 px-2 flex items-center bg-transparent w-[166px] h-[47px]"
				>
					<img
						alt="stackoverflow logo"
						src="/img/stack.png "
						className="w-[150px] h-[30px]"
					/>
				</a>
				<div className="w-[82px] h-[33px] cursor-pointer flex items-center justify-center rounded-large hover:bg-[hsl(210,8%,90%)] whitespace-nowrap">
					<span>Product</span>
				</div>
				<form className="align-baseline relative text-[100%] flex px-2 w-[773px]">
					<HiMagnifyingGlass className="absolute left-[15px] mt-[9px]" />
					<input
						placeholder="Search..."
						className="cursor-text border border-[#babec4] focus:ring-[5px] focus:ring-offset focus:ring-blue-500/[.10]  focus:outline focus:border-[0.5px] focus:outline-[hsl(206,90%,69.5%)] rounded-[3px] border-solid truncate w-full pl-[30px] h-[33px] focus: "
					/>
				</form>
			</div>
		</header>
	);
}
