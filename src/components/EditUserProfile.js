import React, { useEffect } from 'react'; //
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RiBrush3Fill } from 'react-icons/ri';
import { BsCalendarCheck } from 'react-icons/bs';
import axios from 'axios';
import authAtom from '../_state/auth';
import userAtom from '../_state/userAuth';

export default function EditUserProfile() {
	const auth = useRecoilValue(authAtom);
	const userAuth = useRecoilValue(userAtom);
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
				setUserAuth(response.data);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return (
		<div className="flex items-center">
			<img
				src={userAuth?.profileImage}
				alt="userImg"
				className="w-20 h-20 text-gray-600 bg-gray-100 shadow p-1 mr-3"
			/>
			<div className="my-2">
				<div className="text-2xl font-semibold">{userAuth.displayName}</div>
				<div className="mt-2 text-sm">
					<AiOutlineClockCircle className="inline" />
					Creation:
					{userAuth.creationDate === undefined
						? userAuth?.creationDate
						: userAuth?.creationDate.slice(0, 10)}
					<RiBrush3Fill className="inline ml-2" />
					Answers:{userAuth?.answersLength}
					<BsCalendarCheck className="inline ml-2" /> Questions:
					{userAuth?.questionsLength}
				</div>
			</div>
		</div>
	);
}
