import React from 'react';
import '../index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

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

						<div className="w-cont bg-white p-5 mt-6 shadow">
							<div className="font-bold">akubuntu.com</div>
							<div className="font-bold">mathiverflow.net</div>
							<div className="font-bold">stackapps.com</div>
							<div className="font-bold">stackexchange.com</div>
							<div className="font-bold">superuser.com</div>
							{/* <div className=""></div> */}
							<button
								className="  bg-sky-500 text-white rounded py-1"
								type="submit"
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
