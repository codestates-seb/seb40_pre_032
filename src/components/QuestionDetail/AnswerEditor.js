/* eslint-disable */
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AnswerEditor() {
	const [quillText, setQuillText] = useState('');
	const handleTextChange = (e) => {
		setQuillText(e);
	};
	const { id } = useParams();
	const mutation = useMutation((formData) => {
		return axios.post(`http://localhost:4000/questions/${id}`);
	});

	return (
		<main>
			<article>
				<section className="h-[500px] w-[770px] mt-4">
					<h3 className="text-xl mb-4">Your Answer</h3>
					<div dangerouslySetInnerHTML={{ __html: quillText }} />
					<form
						onSubmit={(event) => {
							event.preventDefault();
							mutation.mutate(quillText);
						}}
					>
						<ReactQuill
							theme="snow"
							value={quillText}
							onChange={handleTextChange}
							className="h-[200px]"
						/>
						<button
							className="mt-16 rounded-sm text-sm p-2 text-white bg-[#0a94ff] hover:bg-[#0074CC]"
							type="submit"
						>
							Ask Question
						</button>
					</form>
				</section>
			</article>
		</main>
	);
}

export default AnswerEditor;
