import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function myPage() {
	return (
		<div className="lg:w-full w-full h-screen bg-gray-200 pt-10">
			<div className="ml-24 bg-red-100 mr-2">
				<div className="flex align-middle p-10">
					<div className="bg-gray-100 p-1 shadow-md mr-4">
						<FaUserCircle className="w-20 h-20 text-gray-600" />
					</div>
					<div className="my-2">
						<div className="text-3xl">Display Name</div>
						<div className="mt-2">
							Member for 6 days Last seen this week Visited 5 days, 4
							consecutive
						</div>
					</div>
				</div>

				<div>
					Public information
					<div className="bg-gray-100 p-1 shadow-md mr-4">
						<FaUserCircle className="w-20 h-20 text-gray-600" />
					</div>
					<form className="lg:w-full bg-white p-5 mt-6 drop-shadow-md">
						<div className="font-bold">Display Name</div>
						<input
							type="email"
							className="rounded w-full border-solid border-2 border-gray-500 py-1"
						/>
						<div className="font-bold mt-4">Email</div>
						<input
							type="email"
							className="rounded w-full border-solid border-2 border-gray-500 py-1 "
						/>
						{/* 이부분 커스텀 필요!! */}
						<div className="font-bold  mt-4">Password</div>
						<input
							type="password"
							className="rounded w-full border-solid border-2 border-gray-500 py-1"
						/>
						<button
							className="rounded w-full mt-3 bg-sky-500 text-white py-1"
							type="submit"
						>
							Sign Up
						</button>
					</form>
				</div>

				<div>
					<span>Profile</span> <span>Activity</span> <span>Saves</span>
					<span>Settings</span>
				</div>
			</div>
		</div>
	);
}
