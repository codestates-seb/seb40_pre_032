import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStackOverflow,
	faGoogle,
	faGithub,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export default function signUp() {
	return (
		<div className="lg:w-full w-full  bg-gray-200">
			<div className="flex flex-col my-auto items-center mx-2">
				<div className="flex h-screen">
					<div className="m-auto">
						<div className="text-center mb-5">
							<FontAwesomeIcon
								icon={faStackOverflow}
								className="text-4xl text-orange-500"
							/>
						</div>
						<div className="bg-white  my-1 py-2 px-10 text-center  rounded">
							<FontAwesomeIcon icon={faGoogle} /> Sign up with Google
						</div>
						<div className="bg-neutral-800  my-3  py-2 px-10 text-center rounded text-white">
							<FontAwesomeIcon icon={faGithub} /> Sign up with GitHub
						</div>
						<div className="bg-blue-900 my-3  py-2 px-10 text-center rounded text-white">
							<FontAwesomeIcon icon={faFacebook} /> Sign up with Facebook
						</div>
						<form className="lg:w-full bg-white p-5 mt-6 drop-shadow-md">
							<div className="font-bold">Display Name</div>
							<input
								type="email"
								className="w-full border-solid border-2 border-gray-500 rounded py-1"
							/>
							<div className="font-bold mt-4">Email</div>
							<input
								type="email"
								className="w-full border-solid border-2 border-gray-500 rounded py-1 "
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
								Sign Up
							</button>
						</form>
					</div>
				</div>
				<div>Already have an account? Log in </div>
				<div>Are you an employer? Sign up on Talent </div>
			</div>
		</div>
	);
}
