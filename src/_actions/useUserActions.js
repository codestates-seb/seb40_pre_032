import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import authAtom from '../_state/auth';
import usersAtom from '../_state/user';

export default function useUserActions() {
	const navigate = useNavigate();
	// const baseUrl = `${process.env.REACT_APP_API_URL}/users`;
	const baseUrl = `http://localhost:8080`;
	const setAuth = useSetRecoilState(authAtom); // set함수 반환
	const setUsers = useSetRecoilState(usersAtom);

	function login(email, password) {
		return axios
			.post(`${baseUrl}/authenticate`, { email, password })
			.then((user) => {
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('user', JSON.stringify(user));
				setAuth(user);
				// get return url from location state or default to home page
				navigate('/');
			});
	}

	function logout() {
		// remove user from local storage, set auth state to null and redirect to login page
		localStorage.removeItem('user');
		setAuth(null);
		navigate('/login');
	}

	function getAll() {
		return axios.get(baseUrl).then(setUsers);
	}

	function socialLogin() {
		const params = new URLSearchParams(window.location.search);
		const location = useLocation();

		useEffect(() => {
			const code = params.get('code');
			console.log(code);
			console.log(location);

			if (code != null) {
				console.log('로그인 후');
				axios
					.get(
						`http://3.34.139.61:8080/api/auth/naver/login/token?code=${code}`,
					)
					.then((response) => {
						window.sessionStorage.setItem('token', response.data.token);
						navigate('/');
					})
					.catch((error) => {
						if (error.response.data.email != null) {
							navigate('/join/register', {
								state: {
									email: error.response.data.email,
									oauthProvider: 'naver',
								},
							});
						}
					});
			}
		}, []);
	}

	return {
		login,
		logout,
		getAll,
		socialLogin,
	};
}
