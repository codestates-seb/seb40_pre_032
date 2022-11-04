/* eslint-disable */
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import { addAnswerToQuestion } from '../../utils/hooks/useAnswer';
import { useRecoilValue } from 'recoil';
import authAtom from '../../_state/auth';
import { Link } from 'react-router-dom';

function AnswerEditor() {
	const auth = useRecoilValue(authAtom);
	const queryClient = useQueryClient();
	const [quillText, setQuillText] = useState('');
	const { questionId } = useParams();

	const addAnswer = addAnswerToQuestion(questionId);

	const handleTextChange = (e) => {
		setQuillText(e);
	};

	const handleSubmit = () => {
		const newAnswer = {
			answerContent: quillText,
			accessToken: auth,
		};
		addAnswer.mutate(newAnswer, {
			onSuccess: () => {
				setQuillText('');
				return queryClient.invalidateQueries(['question', questionId]);
			},
		});
	};

	return (
		<main>
			<article>
				<section className="h-[500px] w-[770px] mt-4">
					<h3 className="text-xl mb-4">Your Answer</h3>
					<div>
						<ReactQuill
							theme="snow"
							value={quillText}
							onChange={handleTextChange}
							className="h-[200px]"
						/>
						<button
							className={
								auth === null
									? 'mt-16 rounded-sm text-sm p-2 text-white bg-gray-300 hover:bg-[#0074CC]'
									: 'mt-16 rounded-sm text-sm p-2 text-white bg-[#0a94ff] hover:bg-[#0074CC]'
							}
							type="submit"
							disabled={auth === null ? true : false}
							onClick={handleSubmit}
						>
							Post Your Answer
						</button>
						{auth === null ? (
							<span className="font-normal text-sm">
								<Link
									className="text-blue-500 font-normal text-sm ml-5"
									to="/login"
								>
									Login
								</Link>{' '}
								to post your answer
							</span>
						) : null}
					</div>
				</section>
			</article>
		</main>
	);
}

export default AnswerEditor;
