/* eslint-disable */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { getQuestionById } from '../../utils/hooks/useQuestion';
import { deleteAnswerById } from '../../utils/hooks/useAnswer';
import elapsed from '../../utils/hooks/elapsed';

function AnswerUserInfo({ answerId }) {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { questionId } = useParams();

	const data = getQuestionById(questionId);

	const answerData = data?.data.answers.find(
		(answer) => answer.answerId === answerId,
	);

	const deleteAnswer = deleteAnswerById(answerId);

	const handleDelete = () => {
		deleteAnswer.mutate(
			{},
			{
				onSuccess: () =>
					queryClient.invalidateQueries(['question', questionId]),
			},
		);
	};

	return (
		<div className="mt-6 flex flex-row h-[50px]">
			<div className="w-[280px]">
				<button className="mr-2 text-sm text-gray-500" type="button">
					Share
				</button>
				<button
					className="mr-2 text-sm text-gray-500"
					type="button"
					onClick={() => {
						/* access token이 있으면 수정 페이지로 이동 */
						navigate(`/answers/${answerId}/edit`, {
							state: {
								questionId,
							},
						});
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
					{/* edited (editedAt) ago */}
				</button>
			</div>
			<div className="w-[150px] px-2 py-1">
				<div className="text-gray-500 text-sm">
					asked {elapsed(answerData.creationDate)}
				</div>
				<div className="text-blue-500 text-sm">
					{/* {answerData.owner.displayName} */}
				</div>
			</div>
		</div>
	);
}

export default AnswerUserInfo;
