import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStackOverflow,
	faGoogle,
	faGithub,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export default function Login() {
	return (
		<div className="lg:w-full w-full  bg-gray-200">
			<div className="flex flex-col my-auto items-center mx-3">
				<div className="flex h-screen">
					<div className="m-auto">
						<div className="text-center mb-5">
							<FontAwesomeIcon
								icon={faStackOverflow}
								className="text-4xl text-orange-500"
							/>
						</div>

						<div className="bg-white  my-1 py-2 px-10 text-center  rounded">
							<FontAwesomeIcon icon={faGoogle} /> Log in with Google
						</div>
						<div className="bg-neutral-800  my-3  py-2 px-10 text-center rounded text-white">
							<FontAwesomeIcon icon={faGithub} /> Log in with GitHub
						</div>
						<div className="bg-blue-900 my-3  py-2 px-10 text-center rounded text-white">
							<FontAwesomeIcon icon={faFacebook} /> Log in with faFacebook
						</div>
						<form className="lg:w-full bg-white p-5 mt-6 drop-shadow-md">
							<div className="font-bold">Email</div>
							<input
								type="email"
								className="w-full border-solid border-2 border-gray-500 rounded py-1"
							/>
							{/* 이부분 커스텀 필요!! */}
							<div className="font-bold  mt-4">Password</div>
							<input
								type="password"
								className="w-full border-solid border-2 border-gray-500 rounded py-1"
							/>
							<button
								className="w-full mt-3 bg-sky-500 text-white rounded py-1"
								type="submit"
							>
								Login
							</button>
						</form>
					</div>
				</div>
				<div>Don’t have an account? Sign up </div>
				<div>Are you an employer? Sign up on Talent</div>
			</div>
		</div>
	);
}
