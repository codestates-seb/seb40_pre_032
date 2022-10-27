import React from 'react';
import { IoFilterSharp } from 'react-icons/io5';

function ButtonGroup() {
	return (
		<div className="w-[394px] flex">
			<div className="flex  h-[34px] items-center mr-4">
				<a
					href="https://stackoverflow.com/questions"
					aria-current="page"
					className="rounded-l-[3px] py-[5px] px-4 text-[13px]  h-full text-[#64686e] bg-white border border-[hsl(210,8%,65%)] hover:bg-gray-100  hover:text-gray-900 focus:z-10   focus:text-[#64686e]  "
				>
					<div>Newest</div>
				</a>
				<a
					href="https://stackoverflow.com/questions"
					className=" py-[5px] px-4 text-[13px] h-full text-[#64686e] bg-white border-y border-[hsl(210,8%,65%)] hover:bg-gray-100  hover:text-gray-900 focus:z-10  focus:text-[#64686e]"
				>
					<div>Active</div>
				</a>
				<a
					href="https://stackoverflow.com/questions"
					className="rounded-r-[3px] py-[5px] px-4 text-[13px] h-full text-[#64686e] bg-white border border-[hsl(210,8%,65%)] hover:bg-gray-100 hover:text-gray-900 focus:z-10   focus:text-[#64686e]  "
				>
					<div>Unanswered</div>
				</a>
			</div>
			<div className="border-border-blue rounded-[5px] border-solid flex border h-[34px] hover:bg-[#b3d3e9] text-[#37739c] bg-[#e0ecf3] text-[13px]">
				<button
					type="button"
					className="w-[68px] flex items-center justify-center decoration-[#e0ecf3] "
				>
					<IoFilterSharp className="decoration-[#e0ecf3]" />
					&nbsp;Filter
				</button>
			</div>
		</div>
	);
}

export default ButtonGroup;
