import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStackOverflow,
	faGoogle,
	faGithub,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export default function Login() {
	return (
		<div className="lg:w-full w-full bg-gray-200 h-screen">
			<div className="flex flex-col items-center">
				<div className="flex">
					<div className="mt-24 mx-auto">
						<div className="text-center mb-5 ">
							<FontAwesomeIcon
								icon={faStackOverflow}
								className="text-4xl text-orange-500"
							/>
						</div>

						<div className="rounded bg-white my-1 py-2 px-16  text-center text-base   hover:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300">
							<FontAwesomeIcon icon={faGoogle} /> Log in with Google
						</div>
						<div className="rounded  bg-grayblack-100 my-3 py-2 px-16 text-center text-white text-base  hover:bg-grayblack-200 focus:outline-none focus:ring focus:ring-violet-300">
							<FontAwesomeIcon icon={faGithub} /> Log in with GitHub
						</div>
						<div className="rounded bg-navy-100  my-3 py-2 px-16 text-center text-white text-base  hover:bg-navy-200 focus:outline-none focus:ring focus:ring-blue-300">
							<FontAwesomeIcon icon={faFacebook} /> Log in with Facebook
						</div>
						<form className="lg:w-full bg-white p-5 mt-6 drop-shadow-md rounded-md">
							<div className="font-medium mb-1 text-base">Email</div>
							<input
								type="email"
								className="rounded w-full border-solid  border-[1.5px] focus:outline-none focus:ring focus:ring-blue-200 py-1 pl-2"
							/>
							{/* 이부분 커스텀 필요!! */}
							<div className=" font-medium mb-1 mt-4 text-base">Password</div>
							<input
								type="password"
								className="rounded-md w-full border-solid  border-[1.5px] focus:outline-none focus:ring focus:ring-blue-200 py-1 pl-2"
							/>
							<button
								className="bg-blue-500 rounded w-full mt-5 mb-2 py-2 text-white text-sm  hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
								type="submit"
							>
								Log in
							</button>
						</form>
					</div>
				</div>
				<div className="text-sm mt-10">
					Don’t have an account?
					<a href="./" className=" text-sm text-sky-600 ml-1">
						Sign up
					</a>
				</div>
				<div className="mt-2 mb-7 text-sm">
					Are you an employer?w
					<a href="./" className="text-sm text-sky-600 ml-1">
						Sign up on Talent
					</a>
				</div>
			</div>
		</div>
	);
}
