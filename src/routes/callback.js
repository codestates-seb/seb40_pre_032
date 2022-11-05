import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authAtom from '../_state/auth';
import userAtom from '../_state/userAuth';

export default function Callback() {
	const navigate = useNavigate();
	const tokenPath = window.location.pathname;
	const tokenInfo = tokenPath.split('%20');
	const setUserAuth = useSetRecoilState(userAtom);
	const setAuth = useSetRecoilState(authAtom);

	useEffect(() => {
		const token = tokenInfo[1];
		localStorage.setItem('user', JSON.stringify(token));
		setAuth(token);
		axios
			.get(
				'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/users/myPage',
				{
					headers: { accessToken: token },
				},
			)
			.then((response) => {
				localStorage.setItem('userInfo', JSON.stringify(response.data));
				setUserAuth(response.data);
			})
			.then(() => {
				navigate('/');
			})
			.catch((error) => {
				alert(error);
				navigate('/');
			});
	}, []);

	return (
		<div className="lg:w-full w-full h-screen flex justify-center items-center">
			<img src="/image/spinner.gif" alt="loading" className="w-44 h-44" />
		</div>
	);
}
