/* eslint-disable */
import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import {
	deleteQuestionById,
	getQuestionById,
} from '../../utils/hooks/useQuestion';
import elapsed from '../../utils/hooks/elapsed';

function QuestionUserInfo() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { questionId } = useParams();

	const data = getQuestionById(questionId);

	const deleteQuestion = deleteQuestionById(questionId);

	const handleDelete = () => {
		deleteQuestion.mutate(
			{},
			{
				onSuccess: () => {
					console.log('delete');
					navigate('/');
					return queryClient.invalidateQueries(['question', questionId]);
				},
			},
		);
	};

	return (
		<div className="flex flex-row h-[50px]">
			<div className="w-[280px]">
				<button className="mr-2 text-sm text-gray-500" type="button">
					Share
				</button>
				<button
					className="mr-2 text-sm text-gray-500"
					type="button"
					onClick={() => {
						/* access token이 있으면 수정 페이지로 이동 */
						navigate(`/questions/${questionId}/edit`);
						/* 없으면 로그인 페이지로 이동 */
						// navigate('/login');
					}}
				>
					Edit
				</button>
				<button className="mr-2 text-sm text-gray-500" type="button">
					Follow
				</button>
				<button
					className="mr-2 text-sm text-gray-500"
					type="button"
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
			{/* 수정된 적 없으면 빈칸 */}
			<div className="w-[280px]">
				<button type="button" className="text-blue-500 text-sm">
					{data?.data.creationDate === data?.data.modifiedAt
						? null
						: `edited ${elapsed(data?.data.modifiedAt)}`}
				</button>
			</div>
			<div className="w-[150px] bg-sky-100 px-2 py-1">
				<div className="text-gray-500 text-sm">
					asked {elapsed(data?.data.creationDate)}
				</div>
				<div className="text-blue-500 text-sm">
					{/* {data?.data.owner.displayName} */}
				</div>
			</div>
		</div>
	);
}

export default QuestionUserInfo;
