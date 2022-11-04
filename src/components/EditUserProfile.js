import React from 'react';
import { useRecoilValue } from 'recoil';
import userAuth from '../_state/userAuth';

export default function EditUserProfile() {
	const userInfo = useRecoilValue(userAuth);
	// user_Id : ""
	// user_email:""
	// display_name:""
	// profile_image:""
	// creation_date:
	// questions_length:
	// answers-length
	const userImg = userInfo.profileImage;
	return (
		<div className="flex items-center">
			<img
				src={userImg}
				alt="userImg"
				className="w-20 h-20 text-gray-600 bg-gray-100 shadow p-1 mr-3"
			/>
			<div className="my-2">
				<div className="text-2xl font-semibold">{userInfo.displayName}</div>
				<div className="mt-2 text-sm">
					Welcome to stack overflow! Try answering a question!
				</div>
			</div>
		</div>
	);
}
