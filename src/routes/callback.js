/* eslint-disable */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import authAtom from '../_state/auth';

export default function Callback() {
	const navigate = useNavigate();
	const setAuth = useSetRecoilState(authAtom);
	const tokenPath = window.location.pathname;
	const tokenInfo = tokenPath.split('%');
	useEffect(() => {
		const token = tokenInfo[1];
		localStorage.setItem('user', JSON.stringify(token));
		setAuth(token);
		navigate('/');
	}, []);

	return (
		<div className="lg:w-full w-full h-screen flex justify-center items-center">
			<img src="/image/spinner.gif" alt="loading" className="w-44 h-44" />
		</div>
	);
}
