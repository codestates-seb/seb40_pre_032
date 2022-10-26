import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';

export default function App() {
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
		<div>
			<ReactQuill
				theme="snow"
				value={editorContent}
				onChange={onEditorStateChange}
				className="h-[600px] px-5 mt-5 shadow-gray-700 rounded-xl"
			/>
			<p className="px-10">{errors.content && '입력해주세요'}</p>

			<button
				className="absolute bottom-10 left-10 rounded-lg h-10 items-center cursor-pointer w-1/6 flex justify-center bg-blue-400 mx-auto hover:bg-blue-500"
				type="submit"
				value="Review Your Question"
				onClick={handleSubmit(onSubmit)}
			>
				Review Your Question
			</button>
		</div>
	);
}
