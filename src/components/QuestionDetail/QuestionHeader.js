/* eslint-disable */
import React from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../../utils/hooks/useQuestion';
import elapsed from '../../utils/hooks/elapsed';
import { Link } from 'react-router-dom';

function QuestionHeader() {
	const { questionId } = useParams();

	const data = getQuestionById(questionId);

	return (
		<div className="mt-[47px] py-[20px]">
			<div className="flex flex-row justify-between">
				<h1 className="text-2xl">{data?.data.title}</h1>
				<Link
					className="rounded-sm text-sm p-2 text-white bg-[#0a94ff] hover:bg-[#0074CC]"
					to="/ask"
				>
					Ask Question
				</Link>
			</div>
			<div className="border-gray-200 flex border-b-2 flex-row mb-4">
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Asked</span>
					<span className="text-sm py-2 mr-3">
						{elapsed(data?.data.creationDate)}
					</span>
				</div>
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Modified</span>
					<span className="text-sm py-2 mr-3">
						{elapsed(data?.data.modifiedAt)}
					</span>
				</div>
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Viewed</span>
					<span className="text-sm py-2 mr-3">
						{data?.data.viewCount} times
					</span>
				</div>
			</div>
		</div>
	);
}

export default QuestionHeader;
