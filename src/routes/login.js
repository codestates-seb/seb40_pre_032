import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { AiOutlineGithub, AiFillFacebook } from 'react-icons/ai';
import Header from '../components/Header';

export default function Login() {
	return (
		<>
			<Header />
			<div className="lg:w-full w-full bg-gray-200 h-screen">
				<div className="flex flex-col items-center bg-gray-200">
					<div className="flex ">
						<div className="mt-20 mx-auto">
							<div className="mb-5 flex items-center justify-center">
								<svg
									aria-hidden="true"
									width="32"
									height="37"
									viewBox="0 0 32 37"
								>
									<path
										d="M 26 33 v -9 h 4 v 13 H 0 V 24 h 4 v 9 h 22 Z"
										fill="#c2c3c4"
									/>
									<path
										d="m 21.5 0 l -2.7 2 l 9.9 13.3 l 2.7 -2 L 21.5 0 Z M 26 18.4 L 13.3 7.8 l 2.1 -2.5 l 12.7 10.6 l -2.1 2.5 Z M 9.1 15.2 l 15 7 l 1.4 -3 l -15 -7 l -1.4 3 Z m 14 10.79 l 0.68 -2.95 l -16.1 -3.35 L 7 23 l 16.1 2.99 Z M 23 30 H 7 v -3 h 16 v 3 Z"
										fill="#F77F2B"
									/>
								</svg>
							</div>

							<div className="rounded bg-white my-1 py-2 px-16  text-center text-base   hover:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300">
								<FcGoogle className="inline text-xl mr-1" />
								Log in with Google
							</div>
							<div className="rounded  bg-grayblack-100 my-3 py-2 px-16 text-center text-white text-base  hover:bg-grayblack-200 focus:outline-none focus:ring focus:ring-violet-300">
								<AiOutlineGithub className="inline text-xl mr-1" />
								Log in with GitHub
							</div>
							<div className="rounded bg-navy-100  my-3 py-2 px-16 text-center text-white text-base  hover:bg-navy-200 focus:outline-none focus:ring focus:ring-blue-300">
								<AiFillFacebook className="inline text-xl mr-1" /> Log in with
								Facebook
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
				</div>
				<div className="text-sm mt-10 ">
					Don’t have an account?
					<a
						href="/signup"
						className="ml-1 text-sm text-blue-500 hover:text-sky-500"
					>
						Sign up
					</a>
				</div>
				<div className="mt-2 mb-7 text-sm">
					Are you an employer?
					<a
						href="Sign up"
						className="ml-1 text-sm  text-blue-500 hover:text-sky-500"
					>
						Sign up on Talent
						<MdOutlineOpenInNew className="inline ml-1" />
					</a>
				</div>
			</div>
		</>
	);
}
