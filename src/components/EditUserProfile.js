/* eslint-disable */
import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RiBrush3Fill } from 'react-icons/ri';
import { BsCalendarCheck } from 'react-icons/bs';
import axios from 'axios';
import userAtom from '../_state/userAuth';
import { useState } from 'react';

export default function EditUserProfile() {
	const [userInfo, setUserInfo] = useState('');
	const auth = JSON.parse(localStorage.getItem('user'));
	const setUserAuth = useSetRecoilState(userAtom);

	useEffect(() => {
		axios
			.get(
				'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/users/myPage',
				{
					headers: { accessToken: auth },
				},
			)
			.then((response) => {
				localStorage.setItem('userInfo', JSON.stringify(response.data));
				setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
				setUserAuth(response.data);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return (
		<div className="flex items-center">
			<img
				src={userInfo?.profileImage}
				alt="userImg"
				className="w-20 h-20 text-gray-600 bg-gray-100 shadow p-1 mr-3"
			/>
			<div className="my-2">
				<div className="text-2xl font-semibold">{userInfo?.displayName}</div>
				<div className="mt-2 text-sm">
					<AiOutlineClockCircle className="inline" />
					Creation:
					{userInfo?.creationDate === undefined
						? userInfo?.creationDate
						: userInfo?.creationDate.slice(0, 10)}
					<RiBrush3Fill className="inline ml-2" />
					Answers:{userInfo?.answersLength}
					<BsCalendarCheck className="inline ml-2" /> Questions:
					{userInfo?.questionsLength}
				</div>
			</div>
		</div>
	);
}
