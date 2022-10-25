import React from 'react';
import { IoFilterSharp } from 'react-icons/io5';

function App() {
	return (
		<div className="w-[465px] flex">
			<div className="flex rounded-little h-[34px] items-center mr-4">
				<a
					href="https://stackoverflow.com/questions"
					aria-current="page"
					className="py-[5px] px-4 text-[13px] h-full  text-[#64686e] bg-white rounded-l-little border border-[hsl(210,8%,65%)] hover:bg-gray-100  hover:text-gray-900 focus:z-10   focus:text-[#64686e]  "
				>
					<div>Newest</div>
				</a>
				<a
					href="https://stackoverflow.com/questions"
					className="py-[5px] px-4 text-[13px] h-full test-center text-[#64686e] bg-white border-t border-b border-[hsl(210,8%,65%)]  hover:bg-gray-100 hover:text-gray-900  focus:z-10   focus:text-[#64686e]  "
				>
					<div>Active</div>
				</a>
				<a
					href="https://stackoverflow.com/questions"
					className="py-[5px] px-4 text-[13px] h-full text-[#64686e] bg-white rounded-r-little border border-[hsl(210,8%,65%)] hover:bg-gray-100 hover:text-gray-900 focus:z-10   focus:text-[#64686e]  "
				>
					<div>Unanswered</div>
				</a>
			</div>
			<div className="border-solid flex border-border-blue border h-[34px] hover:bg-[#b3d3e9] rounded-little text-[#37739c] bg-[#e0ecf3] text-[13px]">
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

export default App;
