import React from 'react';

function QuestionHeader() {
	return (
		<div className="mt-[47px] py-[20px]">
			<div className="flex flex-row justify-between">
				<h1 className="text-2xl">
					Remove Leading zeros from StringBuilder object
				</h1>
				<button
					className="rounded-sm text-sm p-2 text-white bg-[#0a94ff] hover:bg-[#0074CC]"
					type="button"
				>
					Ask Question
				</button>
			</div>
			<div className="border-gray-200 flex border-b-2 flex-row mb-4">
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Asked</span>
					<span className="text-sm py-2 mr-3">today</span>
				</div>
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Modified</span>
					<span className="text-sm py-2 mr-3">13 days ago</span>
				</div>
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Viewed</span>
					<span className="text-sm py-2 mr-3">2k times</span>
				</div>
			</div>
		</div>
	);
}

export default QuestionHeader;
