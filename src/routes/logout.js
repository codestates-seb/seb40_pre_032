import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

export default function Logout() {
	return (
		<div className="lg:w-full w-full  bg-gray-200">
			<div className="flex flex-col">
				<div className="flex h-screen">
					<div className="m-auto">
						<div className="text-center">
							Clicking “Log out” will log you out of the following
						</div>
						<div className="text-center"> domains on this device:</div>

						<div className="w-3/4 bg-white p-7 mt-6 mx-auto drop-shadow-lg rounded-md">
							<div>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a href="https://askubuntu.com/" className="text-blue-500">
									akubuntu.com
								</a>
							</div>
							<FontAwesomeIcon
								icon={faStackOverflow}
								className="text-orange-500 mr-2"
							/>
							<a href="https://mathoverflow.net/" className="text-blue-500">
								mathoverflow.net
							</a>
							<div>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a href="https://serverfault.com/" className="text-blue-500">
									serverfault.com
								</a>
							</div>
							<div>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a href="https://stackapps.com/" className="text-blue-500">
									stackapps.com
								</a>
							</div>
							<div>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a href="https://stackexchange.com/" className="text-blue-500">
									stackexchange.com
								</a>
							</div>
							<div>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a href="https://stackoverflow.com/" className="text-blue-500">
									stackoverflow.com
								</a>
							</div>
							<div>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="text-orange-500 mr-2"
								/>
								<a href="https://askubuntu.com/" className="text-blue-500">
									superuser.com
								</a>
							</div>
							<hr className="my-3" />
							<input type="checkbox" />{' '}
							<span className="text-xs">Logout on all device</span>
							<div className="my-3">
								<button
									className="  bg-sky-500 text-white rounded py-2 px-2"
									type="submit"
								>
									<span className="">Log out</span>
								</button>
								<button
									className="  text-blue-500 rounded py-2 px-2 ml-3"
									type="submit"
								>
									cancel
								</button>
							</div>
							<div className="w-60 text-xs p-2 mt-4">
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
