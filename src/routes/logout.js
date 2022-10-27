import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

export default function Logout() {
	return (
		<div className="lg:w-full w-full  bg-gray-200">
			<div className="flex flex-col">
				<div className="flex h-screen">
					<div className="m-auto">
						<div className="text-center text-xl">
							Clicking “Log out” will log you out of the following
						</div>
						<div className="text-center text-xl"> domains on this device:</div>

						<div className="rounded-md w-3/4 bg-white p-7 mt-6 mx-auto drop-shadow-2xl">
							<div className="mb-1">
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a
									href="https://askubuntu.com/"
									className="text-blue-500 hover:text-blue-400"
								>
									akubuntu.com
								</a>
							</div>
							<div className="mb-1">
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a
									href="https://mathoverflow.net/"
									className="text-blue-500 hover:text-sky-500"
								>
									mathoverflow.net
								</a>
							</div>
							<div className="mb-1">
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a
									href="https://serverfault.com/"
									className="text-blue-500 hover:text-sky-500"
								>
									serverfault.com
								</a>
							</div>
							<div className="mb-1">
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a
									href="https://stackapps.com/"
									className="text-blue-500 hover:text-sky-500"
								>
									stackapps.com
								</a>
							</div>
							<div className="mb-1">
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a
									href="https://stackexchange.com/"
									className="text-blue-500 hover:text-sky-500"
								>
									stackexchange.com
								</a>
							</div>
							<div className="mb-1">
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a
									href="https://stackoverflow.com/"
									className="text-blue-500 hover:text-sky-500"
								>
									stackoverflow.com
								</a>
							</div>
							<div className="mb-1">
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2 "
								/>
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
							<span className="text-xs">Logout on all device</span>
							<div className="my-4">
								<button
									className="  rounded bg-sky-500 text-white p-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
									type="submit"
								>
									<span className="">Log out</span>
								</button>
								<button
									className="  rounded text-blue-500 p-2 ml-3 hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-200"
									type="submit"
								>
									cancel
								</button>
							</div>
							<div className="w-64 text-xs mt-6">
								If you’re on a shared computer, remember to log out of your Open
								ID provider (Facebook, Google, Stack Exchange, etc.) as well.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
