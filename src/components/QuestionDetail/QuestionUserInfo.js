/* eslint-disable */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import {
	deleteQuestionById,
	getQuestionById,
} from '../../utils/hooks/useQuestion';
import elapsed from '../../utils/hooks/elapsed';

function QuestionUserInfo() {
	const auth = JSON.parse(localStorage.getItem('user'));
	const user = JSON.parse(localStorage.getItem('userInfo'));

	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { questionId } = useParams();

	const data = getQuestionById(questionId);

	const deleteQuestion = deleteQuestionById(questionId);

	const handleEdit = () => {
		if (auth === null) {
			alert('로그인 후 다시 시도해주세요.');
			navigate('/login');
		} else {
			navigate(`/questions/${questionId}/edit`, {
				state: {
					questionId,
				},
			});
		}
	};

	const handleDelete = () => {
		if (auth === null) {
			alert('로그인 후 다시 시도해주세요.');
			navigate('/login');
		} else {
			deleteQuestion.mutate(
				{ accessToken: auth },
				{
					onSuccess: () => {
						navigate('/');
						return queryClient.invalidateQueries(['question', questionId]);
					},
				},
			);
		}
	};

	return (
		<div className="flex flex-row h-[50px]">
			<div className="w-[280px]">
				{data?.data.owner.userId === user.userId ? (
					<>
						<button
							className="mr-2 text-sm text-gray-500"
							type="button"
							onClick={handleEdit}
						>
							Edit
						</button>
						<button
							className="mr-2 text-sm text-gray-500"
							type="button"
							onClick={handleDelete}
						>
							Delete
						</button>
					</>
				) : null}
			</div>
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
				<div className="flex flex-row">
					<img
						className="h-[20px] w-[20px]"
						src={data?.data.owner.profileImage}
					/>
					<span className="text-blue-500 text-sm ml-2">
						{data?.data.owner.displayName}
					</span>
				</div>
			</div>
		</div>
	);
}

export default QuestionUserInfo;
