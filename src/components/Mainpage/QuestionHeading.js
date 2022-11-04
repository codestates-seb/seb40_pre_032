import React from 'react';
import { Link } from 'react-router-dom';

function QuestionHeading() {
	return (
		<div className="flex flex-wrap mb-[12px] justify-between ">
			<h1 className="select-auto text-[1.61538462rem]">All Questions</h1>
			<div className="cursor-pointer mb-[12px] align-baseline h-[35px] w-[100px] bg-[hsl(206,100%,52%)] text-center rounded-[3px] pt-[2px] hover:bg-[hsl(206,100%,40%)]">
				<Link to="/ask" className=" text-[13px] text-white">
					Ask Question
				</Link>
			</div>
		</div>
	);
}

export default QuestionHeading;
