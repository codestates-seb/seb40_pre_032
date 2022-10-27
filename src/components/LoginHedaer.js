import React from 'react';
import { HiMagnifyingGlass, HiInbox } from 'react-icons/hi2';
import { GrTrophy } from 'react-icons/gr';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

function LoginHeader() {
	return (
		<div className="flex flex-col">
			<div className="w-full bg-[#f38227] h-[3px]" />
			<header className="h-[47px] bg-[#f7faf9] flex flex-row items-center shadow-1top text-[13px]">
				<div className="w-[1800px] h-full flex items-center mx-auto my-0 max-w-full">
					<a
						href="https://stackoverflow.com/"
						className="cursor-pointer py-0 px-2 flex items-center bg-transparent w-[166px] h-[47px]"
					>
						<img
							alt="stackoverflow logo"
							src="/img/stack.png"
							className="w-[150px] h-[30px]"
						/>
					</a>
					<div className="rounded w-[82px] h-[33px] cursor-pointer flex items-center justify-center hover:bg-[hsl(210,8%,90%)] whitespace-nowrap">
						<span>Product</span>
					</div>
					<form className="align-baseline relative text-[100%] flex px-2 w-[773px]">
						<HiMagnifyingGlass className="absolute left-[15px] mt-[9px]" />
						<input
							placeholder="Search..."
							className=" focus: cursor-text border border-[#babec4] focus:ring-[5px]  focus:ring-blue-500/[.10] focus:outline focus:border-[0.5px] focus:outline-[hsl(206,90%,69.5%)] rounded-[3px] border-solid truncate w-full pl-[30px] h-[33px] "
						/>
					</form>
					<nav className="flex items-center h-full">
						<div className="mr-1 px-[10px]">ddhhss0603</div>
						<div className="flex justify-center h-full items-center w-[40px] px-[10px] hover:bg-[hsl(210,8%,90%)]">
							<HiInbox />
						</div>
						<div className="flex justify-center h-full items-center w-[40px] px-[10px] hover:bg-[hsl(210,8%,90%)]">
							<GrTrophy />
						</div>
						<div className="flex justify-center h-full items-center w-[40px] px-[10px] hover:bg-[hsl(210,8%,90%)]">
							<BsFillQuestionCircleFill />
						</div>
						<ol className="list-none px-[10]">
							<li className=" ml-[4px] float-left flex h-[34px]  text-[13px] ">
								<button
									type="submit"
									className=" flex items-center w-[68px] justify-center  text-white border-[0.5px] rounded-[3px] hover:bg-[#0074CC] bg-[#0a94ff]"
								>
									Log out
								</button>
							</li>
						</ol>
					</nav>
				</div>
			</header>
		</div>
	);
}

export default LoginHeader;
