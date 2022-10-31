import React, { useEffect } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';

function AnswerEditor() {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		register('content', { required: true, minLength: 11 });
	}, [register]);

	const onEditorStateChange = (editorState) => {
		setValue('content', editorState);
	};

	const onSubmit = (data) => {
		console.log(data);
	};

	const editorContent = watch('content');

	return (
		<main>
			<article>
				<section className="h-[500px] w-[770px] mt-4">
					<h3 className="text-xl mb-4">Your Answer</h3>
					<form onSubmit={handleSubmit(onSubmit)}>
						<ReactQuill
							theme="snow"
							value={editorContent}
							onChange={onEditorStateChange}
							className="h-[200px]"
						/>
						<p className="px-10">{errors.content && '입력해주세요'}</p>
						<button
							className="mt-16 rounded-sm text-sm p-2 text-white bg-[#0a94ff] hover:bg-[#0074CC]"
							type="button"
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
