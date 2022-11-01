/* eslint-disable */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

function AnswerEditor() {
	const { answerId } = useParams();

	const location = useLocation();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { data } = useQuery(['question', location.state.questionId], () => {
		return axios.get(
			`http://localhost:4000/questions/${location.state.questionId}`,
		);
	});

	const answerData = data?.data.answers.find(
		(answer) => answer.answerId == answerId,
	);

	const [quillText, setQuillText] = useState(answerData.answerContent);

	const editAnswer = useMutation((editedAnswer) => {
		return axios.patch(
			`http://localhost:4000/answers/${answerId}`,
			editedAnswer,
		);
	});

	const handleTextChange = (event) => {
		setQuillText(event);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const editedAnswer = {
			answerContent: quillText,
		};
		editAnswer.mutate(editedAnswer, {
			onSuccess: () => {
				navigate(`/questions/${location.state.questionId}`);
				return queryClient.invalidateQueries([
					'question',
					location.state.questionId,
				]);
			},
		});
	};

	return (
		<main>
			<div className="mt-20">
				<Link to={`/questions/${location.state.questionId}`}>
					<h3 className="text-lg text-blue-700">{data?.data.title}</h3>
				</Link>
				<div
					className="mt-4"
					dangerouslySetInnerHTML={{ __html: data?.data.questionContent }}
				></div>
			</div>
			<div className="h-[500px] w-[770px] mr-4 mt-10">
				<div>
					<h3 className="text-lg mb-2">Answer</h3>
					<div className="h-[200px]">
						<ReactQuill
							theme="snow"
							value={quillText}
							onChange={handleTextChange}
							className="h-[190px]"
						/>
					</div>
					<div
						className="mt-10"
						dangerouslySetInnerHTML={{ __html: quillText }}
					></div>
					<button
						className="mt-12 rounded-sm text-sm p-2 text-white bg-[#0a94ff] hover:bg-[#0074CC]"
						type="submit"
						onClick={handleSubmit}
					>
						Save edits
					</button>
				</div>
			</div>
		</main>
	);
}

export default AnswerEditor;
