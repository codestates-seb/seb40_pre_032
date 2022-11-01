import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SiAskubuntu, SiServerfault, SiSuperuser } from 'react-icons/si';
import { AiTwotoneSetting } from 'react-icons/ai';
import { FaStackExchange, FaStackOverflow } from 'react-icons/fa';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { GrStackOverflow } from 'react-icons/gr';
import axios from 'axios';
import Header from '../components/Header';
import authAtom from '../_state/auth';

export default function Logout() {
	const auth = useRecoilValue(authAtom);
	const baseUrl = `http://localhost:8080`;
	const userEmail = auth?.user.email;
	const navigate = useNavigate();
	const setAuth = useSetRecoilState(authAtom);

	function logout(email) {
		console.log('email', email);
		const config = { headers: { Authorization: `Bearer${auth.accessToken}` } };
		localStorage.removeItem('user');

		return axios
			.post(`${baseUrl}/user`, { email }, { withCredentials: true }, config)
			.then((response) => {
				console.log(response);
				localStorage.removeItem('user');
				setAuth(null);
				navigate('/login');
			});
	}
	return (
		<>
			<Header />
			<div className="lg:w-full w-full  bg-gray-200">
				<div className="flex flex-col">
					<div className="flex h-screen bg-gray-200">
						<div className="m-auto">
							<div className="text-center text-xl">
								Clicking “Log out” will log you out of the following
							</div>
							<div className="text-center text-xl">domains on this device:</div>
							<div className="rounded-md w-3/4 bg-white p-7 mt-6 mx-auto drop-shadow-2xl">
								<div className="mb-1">
									<SiAskubuntu className="inline mr-2  text-orange-600" />
									<a
										href="https://askubuntu.com/"
										className="text-blue-500 hover:text-blue-400"
									>
										akubuntu.com
									</a>
								</div>

								<div className="mb-1">
									<GrStackOverflow className="inline mr-2 text-amber-700" />
									<a href="./" className="text-blue-500 hover:text-sky-500">
										mathoverflow.net
									</a>
								</div>

								<div className="mb-1">
									<SiServerfault className="inline mr-2  text-grayblack-100" />
									<a
										href="https://serverfault.com/"
										className="text-blue-500 hover:text-sky-500"
									>
										serverfault.com
									</a>
								</div>

								<div className="mb-1">
									<AiTwotoneSetting className="inline mr-2  text-gray-500" />
									<a
										href="https://stackapps.com/"
										className="text-blue-500 hover:text-sky-500"
									>
										stackapps.com
									</a>
								</div>

								<div className="mb-1">
									<FaStackExchange className="inline mr-2 text-blue-500" />
									<a
										href="https://stackexchange.com/"
										className="text-blue-500 hover:text-sky-500"
									>
										stackexchange.com
									</a>
								</div>

								<div className="mb-1">
									<FaStackOverflow className="inline mr-2  text-orange-600" />
									<a
										href="https://stackoverflow.com/"
										className="text-blue-500 hover:text-sky-500"
									>
										stackoverflow.com
									</a>
								</div>

								<div className="mb-1">
									<SiSuperuser className="inline mr-2  text-blue-700" />
									<a
										href="https://askubuntu.com/"
										className="text-blue-500 hover:text-sky-500"
									>
										superuser.com
									</a>
								</div>

								<div className="my-4 border-b-2" />
								<input
									type="checkbox"
									className="focus:ring focus:ring-blue-200 rounded-md"
								/>
								<span className="text-xs ml-1">Log out on all device</span>

								<div className="my-4">
									<button
										className="text-sm rounded bg-sky-500 text-white p-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
										type="submit"
										onClick={() => logout(userEmail)}
									>
										Log out
									</button>
									<button
										className="text-sm rounded text-blue-500 p-2 ml-3 hover:bg-sky-100 focus:outline-none focus:ring focus:ring-blue-200"
										type="submit"
									>
										Cancel
									</button>
								</div>
								<div className="w-64 text-xs mt-7 text-gray-600">
									If you’re on a shared computer, remember to log out of your
									Open ID provider (Facebook, Google, Stack Exchange, etc.) as
									well.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
