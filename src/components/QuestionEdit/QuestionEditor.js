/* eslint-disable */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getQuestionById } from '../../utils/hooks/useQuestion';
import { editQuestionById } from '../../utils/hooks/useQuestion';
import { useRecoilValue } from 'recoil';
import authAtom from '../../_state/auth';

function AddTag({ tags, setTags }) {
	const [inputValue, setInputValue] = useState('');

	const addTags = (event) => {
		if (event.key === 'Enter') {
			setTags([...tags, event.target.value]);
			setInputValue('');
		}
	};

	const removeTags = (indexToRemove) => {
		setTags(tags.filter((_, index) => index !== indexToRemove));
	};

	return (
		<div className="mt-3 border-2 border-gray-200 h-[40px] w-[770px] flex flex-row justify-center items-center">
			<ul className="flex flex-row">
				{tags.map((tag, idx) => {
					return (
						<li
							key={idx}
							className="rounded-sm align-middle px-2 py-1 mx-1 bg-sky-100 text-blue-500 text-sm h-6 flex flex-row items-center"
						>
							<span>{tag}</span>
							<span
								role="presentation"
								className="cursor-pointer hover:opacity-60 text-blue-500 text-xl"
								onClick={() => removeTags(idx)}
							>
								&times;
							</span>
						</li>
					);
				})}
			</ul>
			<input
				className="flex w-[750px]"
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
				type="text"
				onKeyUp={(event) => {
					addTags(event);
				}}
			/>
		</div>
	);
}

function QuestionEditor() {
	const auth = useRecoilValue(authAtom);
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { questionId } = useParams();

	const data = getQuestionById(questionId);

	const editQuestion = editQuestionById(questionId);

	const [titleValue, setTitleValue] = useState(data?.data.title);
	const [quillText, setQuillText] = useState(data?.data.questionContent);
	const [tags, setTags] = useState(data?.data.tags);
	const handleTextChange = (e) => {
		setQuillText(e);
	};

	const handleTitleChange = (event) => {
		setTitleValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const editedQuestion = {
			title: titleValue,
			questionContent: quillText,
			accessToken: auth,
			// tags: tags,
		};

		editQuestion.mutate(editedQuestion, {
			onSuccess: () => {
				navigate(`/questions/${questionId}`);
				return queryClient.invalidateQueries(['question', questionId]);
			},
		});
	};

	return (
		<main>
			<article>
				<section className="h-[500px] w-[770px] mr-4 mt-20">
					<h3 className="text-l">Title</h3>
					<div>
						<input
							type="text"
							value={titleValue}
							onChange={handleTitleChange}
							className="w-full border-2 text-sm rounded-sm border-gray-200 px-2 py-1 mb-5"
						/>
						<h3 className="text-l">Body</h3>
						<div className="h-[200px]">
							<ReactQuill
								theme="snow"
								value={quillText}
								onChange={handleTextChange}
								className="h-[190px]"
							/>
						</div>
						<h3 className="text-l mt-14">Tags</h3>
						<AddTag tags={tags} setTags={setTags} />
						<button
							className="mt-3 rounded-sm text-sm p-2 text-white bg-[#0a94ff] hover:bg-[#0074CC]"
							type="submit"
							onClick={handleSubmit}
						>
							Save edits
						</button>
					</div>
				</section>
			</article>
		</main>
	);
}

export default QuestionEditor;
