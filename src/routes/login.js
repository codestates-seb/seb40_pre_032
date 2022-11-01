import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiNaver } from 'react-icons/si';
// import axios from 'axios';
import { useRecoilValue } from 'recoil';
import Header from '../components/Header';
import authAtom from '../_state/auth';
import useUserActions from '../_actions/useUserActions';

export default function Login() {
	const [userEmail, setUserEmail] = useState();
	const [userPassword, setUserPassword] = useState();

	const onEmailChange = (e) => {
		setUserEmail(e.target.value);
		console.log(userEmail);
	};
	const onPasswordChange = (e) => {
		setUserPassword(e.target.value);
		console.log(userPassword);
	};

	const navigate = useNavigate();
	const auth = useRecoilValue(authAtom);
	console.log('auth', auth);
	const userActions = useUserActions();
	useEffect(() => {
		// redirect to home if already logged in
		if (auth) navigate('/');
	}, []);

	const onSubmit = (email, password) => {
		// alert(email, password);
		return userActions.login(email, password).catch((error) => {
			alert(error);
		});
	};

	// 여기 아래는 소셜입니다

	// const serverURL = '';
	const googleClientId = process.env.REACT_APP_GOOGLE_LOGIN;
	const naverClientId = process.env.REACT_APP_NAVER_LOGIN;

	const googleLoginHandler = () => {
		const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=http://rebon.s3-website.ap-northeast-2.amazonaws.com/loading&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
		window.location.href = GOOGLE_LOGIN_URL;
	};

	const gitHubLoginHandler = () => {
		const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize`;
		window.location.href = GITHUB_LOGIN_URL;
	};

	const naverLoginHandler = () => {
		const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&redirect_uri=http://rebon.s3-website.ap-northeast-2.amazonaws.com/loading`;
		// const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&redirect_uri=http://localhost:3000/loading`;
		window.location.href = NAVER_LOGIN_URL;
	};

	// const [token, setToken] = useState(window.sessionStorage.getItem('token'));
	// useEffect(() => {
	// 	const config = {
	// 		headers: { Authorization: `Bearer ${token}` },
	// 	};
	// 	if (token) {
	// 		axios
	// 			.get('http://3.34.139.61:8080/api/members', config)
	// 			.then((response) => {
	// 				setToken(response.data);
	// 			})
	// 			.catch((error) => {
	// 				console.log(error);
	// 			});
	// 	}
	// }, []);

	// console.log(window.sessionStorage.getItem('token'));

	// const requestLogin = async (email, pw) => {
	// 	await axios
	// 		.post(
	// 			`${serverURL}/login/`,
	// 			{
	// 				email,
	// 				password: pw,
	// 			},
	// 			{ withCredentials: true },
	// 		)
	// 		.then((response) => {
	// 			/// token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
	// 			axios.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
	// 			localStorage.setItem('access_token', response.data.access_token);
	// 			return response.data;
	// 		})
	// 		.catch((e) => {
	// 			console.log(e.response.data);
	// 			return '이메일 혹은 비밀번호를 확인하세요.';
	// 		});
	// };

	return (
		<>
			<Header />
			<div className="lg:w-full w-full bg-gray-200 h-screen flex justify-center items-center">
				<div className="items-center flex flex-col  h-fit">
					<div className="flex">
						<div className="mt-24 mx-auto">
							<div className="mb-5 flex items-center justify-center">
								<svg
									aria-hidden="true"
									width="32"
									height="37"
									viewBox="0 0 32 37"
								>
									<path
										d="M 26 33 v -9 h 4 v 13 H 0 V 24 h 4 v 9 h 22 Z"
										fill="#c2c3c4"
									/>
									<path
										d="m 21.5 0 l -2.7 2 l 9.9 13.3 l 2.7 -2 L 21.5 0 Z M 26 18.4 L 13.3 7.8 l 2.1 -2.5 l 12.7 10.6 l -2.1 2.5 Z M 9.1 15.2 l 15 7 l 1.4 -3 l -15 -7 l -1.4 3 Z m 14 10.79 l 0.68 -2.95 l -16.1 -3.35 L 7 23 l 16.1 2.99 Z M 23 30 H 7 v -3 h 16 v 3 Z"
										fill="#F77F2B"
									/>
								</svg>
							</div>

							<button
								type="button"
								className="w-full rounded bg-white my-1 px-16 py-2  text-center text-base   hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 block"
								onClick={googleLoginHandler}
							>
								<FcGoogle className="inline text-xl mr-1" />
								Log in with Google
							</button>

							<button
								type="button"
								className="w-full rounded  bg-grayblack-100 my-3 py-2 text-center text-white text-base  hover:bg-grayblack-200 focus:outline-none focus:ring focus:ring-blue-300 block"
								onClick={gitHubLoginHandler}
							>
								<AiOutlineGithub className="inline text-xl mr-1" />
								Log in with GitHub
							</button>

							<button
								type="button"
								className="w-full rounded bg-green-500 my-3 py-2  text-center text-base text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300 block"
							>
								<SiNaver
									className="inline text-xl mr-1"
									onClick={naverLoginHandler}
								/>
								Log in with Naver
							</button>

							<form className="lg:w-full bg-white p-5 mt-6 drop-shadow-md rounded-md">
								<div className="font-medium mb-1 text-base">Email</div>
								<input
									value={userEmail}
									onChange={onEmailChange}
									type="email"
									className="rounded w-full border-solid  border-[1.5px] focus:outline-none focus:ring focus:ring-blue-200 py-1 pl-2"
								/>
								{/* 이부분 커스텀 필요!! */}
								<div className=" font-medium mb-1 mt-4 text-base">Password</div>
								<input
									value={userPassword}
									onChange={onPasswordChange}
									type="password"
									className="rounded-md w-full border-solid  border-[1.5px] focus:outline-none focus:ring focus:ring-blue-200 py-1 pl-2"
								/>
								<button
									className="bg-blue-500 rounded w-full mt-5 mb-2 py-2 text-white text-sm  hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
									type="submit"
									onClick={() => onSubmit(userEmail, userPassword)}
								>
									Log in
								</button>
							</form>
						</div>
					</div>
					<div className="text-sm mt-10 ">
						Don’t have an account?
						<Link
							to="/signup"
							className="ml-1 text-sm text-blue-500 hover:text-sky-500"
						>
							Sign up
						</Link>
					</div>
					<div className="mt-2 mb-7 text-sm">
						Are you an employer?
						<Link
							to="."
							className="ml-1 text-sm  text-blue-500 hover:text-sky-500"
						>
							Sign up on Talent
							<MdOutlineOpenInNew className="inline ml-1" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
