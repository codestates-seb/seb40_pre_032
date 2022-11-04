import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import EditUserProfile from '../components/EditUserProfile';
import UserButtonCol from '../components/UserButtonCol';
import UserButtonRow from '../components/UserButtonRow';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import userAuth from '../_state/userAuth';

export default function MyPage() {
	const navigate = useNavigate();
	const userInfo = useRecoilValue(userAuth);

	useEffect(() => {
		if (userInfo === null) navigate('/');
	});

	return (
		<>
			<Header />
			<div className="flex justify-center align-middle">
				<LeftSidebar />
				<div className="w-full mx-3 lg:w-fit mt-14 ">
					<div className="h-screen ">
						<div className="flex align-middle py-10 px-7 ">
							<EditUserProfile />
						</div>
						<UserButtonCol />
						<div className="flex flex-row mt-6">
							<UserButtonRow />
							<div className="lg:w-3/5 mx-10">
								<div className="ml-5 pb-1 text-2xl font-semibold border-b border-solid border-b-gray-400">
									Your Profile
								</div>
								<form className="rounded-md mb-10 py-5 px-10 mx-5 mt-6 drop-shadow-md border border-solid  shadow-lg">
									<EditUserProfile />
									<div className="font-bold mt-10 mb-1">Display Name</div>
									<input
										type="name"
										value={userInfo.displayName}
										className="rounded w-3/4 border-solid border-[1px] border-gray-500 py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
									/>
									<div className="font-bold mt-4 mb-1">Email</div>
									<input
										type="email"
										value={userInfo.email}
										className="rounded w-3/4 border-solid border-[1px] border-gray-500 py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
									/>
									{/* 이부분 커스텀 필요!! */}
									<div className="font-bold  mt-4 mb-1">Password</div>
									<input
										type="password"
										className="rounded w-3/4 border-solid border-[1px] border-gray-500 py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
									/>
									<div className="mt-10">
										<button
											className="rounded mt-3 bg-sky-500 text-white py-1 mr-1 p-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
											type="submit"
										>
											Save profile
										</button>
										<button
											className="rounded mt-3 bg-sky-100 text-blue-700 py-1 p-2 hover:bg-sky-200 focus:outline-none focus:ring focus:ring-blue-200"
											type="submit"
										>
											Cancel
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
