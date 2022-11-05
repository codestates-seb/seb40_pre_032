/* eslint-disable */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { useMutation, useQueryClient } from 'react-query';
import 'react-quill/dist/quill.snow.css';
import TagInput from './TagInput';
import Accordian from './Accordian';
import axios from 'axios';

function Editor() {
	const auth = JSON.parse(localStorage.getItem('user'));
	const queryClient = useQueryClient({
		defaultOptions: {
			queries: {
				suspense: true,
				refetchOnWindowFocus: false,
			},
		},
	});

	const [title, setTitle] = useState('');
	const [quillText, setQuillText] = useState('');
	const [tags, setTags] = useState([]);

	const handleTitleChange = (event) => setTitle(event.target.value);

	const handleTextChange = (event) => {
		setQuillText(event);
	};

	const addQuestion = useMutation((newQuestion) => {
		axios.post(
			'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/questions/add',
			newQuestion,
		);
	});
	const handleSubmit = () => {
		const newQuestion = {
			title,
			questionContent: quillText,
			tags,
			accessToken: auth,
		};
		addQuestion.mutate(newQuestion, {
			onSuccess: () => {
				// navigate('/');
				document.location.href = '/';
				return queryClient.invalidateQueries(['questions'], {
					refetchInactive: true,
				});
			},
		});
	};

	return (
		<main className="flex items-center mx-auto justify-center">
			<article>
				<h1 className="font-bold ml-12 mt-4 text-2xl">Ask a Question</h1>
				<section className=" shadow w-[1000px] h-[800px] px-2 mx-10 mt-10 border border-gray-600 bg-white">
					<h3 className="font-semibold">Title</h3>
					<div className="text-gray-700 mb-2">
						Be specific and imagine you’re asking a question to another person
					</div>
					<input
						value={title}
						onChange={handleTitleChange}
						type="text"
						className="w-full border-2 px-2 py-1 leading-loose"
						placeholder="e.g Is there an R function for findiong the index of an element in vector?"
					/>

					<h3 className="font-semibold mt-2">Body</h3>
					<span className="text-gray-700">
						Include all the information someone would need to answer your
						question
					</span>
					<div dangerouslySetInnerHTML={{ __html: quillText }} />
					<ReactQuill
						theme="snow"
						value={quillText}
						onChange={handleTextChange}
						className="h-96 px-2 mt-3 relative right-2 shadow-gray-700"
					/>
					<p className="px-10">{/*  */}</p>
					<TagInput tags={tags} setTags={setTags} />
					<button
						className="text-white h-10 mt-7 ml-3 items-center cursor-pointer w-1/6 flex justify-center bg-blue-400 hover:bg-blue-500"
						type="submit"
						onClick={handleSubmit}
					>
						Add Question
					</button>
				</section>
			</article>
			<Accordian />
		</main>
	);
}

export default Editor;
