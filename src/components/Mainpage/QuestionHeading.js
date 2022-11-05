import React from 'react';
import { useNavigate } from 'react-router';

function QuestionHeading() {
	const navigate = useNavigate();
	const auth = JSON.parse(localStorage.getItem('user'));

	const handleAskClick = () => {
		if (auth === null) {
			alert('로그인이 필요한 서비스입니다.');
			navigate('/login');
		} else {
			navigate('/ask');
		}
	};
	return (
		<div className="flex flex-wrap mb-[12px] justify-between ">
			<h1 className="select-auto text-[1.61538462rem]">All Questions</h1>
			<div className="cursor-pointer mb-[12px] align-baseline h-[35px] w-[100px] bg-[hsl(206,100%,52%)] text-center rounded-[3px] pt-[2px] hover:bg-[hsl(206,100%,40%)]">
				<button
					type="button"
					className=" text-[13px] text-white"
					onClick={handleAskClick}
				>
					Ask Question
				</button>
			</div>
		</div>
	);
}

export default QuestionHeading;
