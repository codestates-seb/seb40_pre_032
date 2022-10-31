import React, { useEffect } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import Accordian from './Accordian';
import TagInput from './TagInput';

function Editor() {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	useEffect(() => {
		register('content', { required: true, minLength: 11 });
	}, [register]);

	const onEditorStateChange = (editorState) => {
		setValue('content', editorState);
	};

	const onSubmit = (data) => {
		// eslint-disable-next-line
		console.log(data);
	};

	const editorContent = watch('content');

	return (
		<main className="flex items-center mx-auto">
			<article>
				<h1 className="font-bold ml-12 mt-4 text-2xl">Ask a Question</h1>
				<section className=" shadow w-[1000px] h-[800px] px-2 mx-10 mt-10 border border-gray-600 bg-white">
					<h3 className="font-semibold">Title</h3>
					<div className="text-gray-700 mb-2">
						Be specific and imagine you’re asking a question to another person
					</div>
					<input
						/* eslint-disable react/jsx-props-no-spreading */
						{...register('title', { required: true })}
						type="text"
						className="w-full border-2 px-2 py-1 leading-loose"
						placeholder="e.g Is there an R function for findiong the index of an element in vector?"
					/>
					{errors.title?.message}
					<h3 className="font-semibold mt-2">Body</h3>
					<span className="text-gray-700">
						Include all the information someone would need to answer your
						question
					</span>
					<form onSubmit={handleSubmit(onSubmit)}>
						<ReactQuill
							{...register('content', { required: true })}
							theme="snow"
							value={editorContent}
							onChange={onEditorStateChange}
							className="h-96 px-2 mt-3 relative right-2 shadow-gray-700"
						/>
						<p className="px-10">{errors.content?.message && '입력해주세요'}</p>
						<TagInput />
						<button
							className="text-white h-10 mt-10 ml-3 items-center cursor-pointer w-1/6 flex justify-center bg-blue-400 mx-auto hover:bg-blue-500"
							type="submit"
							value="Review Your Question"
							onClick={handleSubmit(onSubmit)}
						>
							Review Your Question
						</button>
					</form>
				</section>
			</article>
			<Accordian />
		</main>
	);
}

export default Editor;
