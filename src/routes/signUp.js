import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// useLocation
// import { useSetRecoilState, useRecoilValue } from 'recoil';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaQuestionCircle } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import axios from 'axios';
import Header from '../components/Header';
// import useUserActions from '../_actions/useUserActions';
// import authAtom from '../_state/auth';

export default function SignUp() {
	// const baseUrl = `http://ec2-15-165-146-60.ap-northeast-2.compute.amazonaws.com:8080`;
	const baseUrl = `http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080`;
	// const userActions = useUserActions();
	// const auth = useRecoilValue(authAtom); // 토큰 정보
	// const setAuth = useSetRecoilState(authAtom);
	const navigate = useNavigate();

	// const googleClientId = process.env.REACT_APP_GOOGLE_LOGIN;
	const googleLoginHandler = () => {
		// const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=http://localhost:3000/loading&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
		const GOOGLE_LOGIN_URL = `http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google`;
		// const GOOGLE_LOGIN_URL = `http://ec2-15-165-146-60.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google`;
		window.location.href = GOOGLE_LOGIN_URL;
		// const params = new URLSearchParams(window.location.search);
		// alert('params', params);

		// userActions.naverLogin();
		// const params = new URLSearchParams(window.location.search);
		// const location = useLocation();
		// useEffect(() => {
		// const code = params.get('code');
		// 	const url = `https://oauth2.googleapis.com/token?code=${code}&client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_CLIENT_SECRET}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&grant_type=${process.env.GOOGLE_GRANT_TYPE}`;
		// console.log(code);
		// console.log(location);

		// 	if (code != null) {
		// 		console.log('로그인 후');
		// 		axios
		// 			.get(url)
		// 			.then((user) => {
		// 				localStorage.setItem('user', JSON.stringify(user));
		// 				console.log(url);
		// 				setAuth(user);
		// 			})
		// 			.catch((error) => {
		// 				if (error.response.data.email != null) {
		// 					navigate('/signup', {
		// 						state: {
		// 							email: error.response.data.email,
		// 							oauthProvider: 'google',
		// 						},
		// 					});
		// 				}
		// 			});
		// 	}
		// }, []);
		// };
	};

	const naverLoginHandler = () => {
		const GOOGLE_LOGIN_URL = `${baseUrl}/oauth2/authorization/naver`;
		window.location.href = GOOGLE_LOGIN_URL;
		// const params = new URLSearchParams(window.location.search);
		// const location = useLocation();

		// const callbackUrl = process.env.REACT_APP_REDIRECT_URI;
		// useEffect(() => {
		// 	const code = params.get('code');
		// 	console.log(code);
		// 	console.log(location);

		// 	if (code != null) {
		// 		console.log('로그인 후');
		// 		axios
		// 			.get(`${callbackUrl}`)
		// 			.then((response) => {
		// 				window.sessionStorage.setItem('token', response.data.token);
		// 				navigate('/');
		// 			})
		// 			.catch((error) => {
		// 				if (error.response.data.email != null) {
		// 					navigate('/join/register', {
		// 						state: {
		// 							email: error.response.data.email,
		// 							oauthProvider: 'naver',
		// 						},
		// 					});
		// 				}
		// 			});
		// 	}
		// }, []);
	};

	// useForm을 사용하여 변경하자
	const [dpName, setDpName] = useState();
	const onChangeName = (event) => {
		setDpName(event.target.value);
		console.log(dpName);
	};
	const [email, setEmail] = useState();
	const onChangeEmail = (event) => {
		setEmail(event.target.value);
		console.log(email);
	};
	const [passWord, setPassWord] = useState();
	const onChangePassWord = (event) => {
		setPassWord(event.target.value);
		console.log(passWord);
	};

	function clickRegister(e) {
		e.preventDefault();
		return axios
			.post(
				`http://cors-anywhere.herokuapp.com/http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/users/signup`,
				{
					email,
					displayName: dpName,
					password: passWord,
				},
			)
			.then((response) => {
				alert('test', response);
				navigate('/login');
			})
			.catch((error) => {
				alert(error);
				navigate(`/signup`);
			});
	}

	return (
		<>
			<Header />
			<div className="lg:w-full w-full bg-gray-200 h-screen">
				<div className="flex flex-col items-center bg-gray-200 pt-10">
					<div className="mt-20 mb-5 text-xl text-center">
						<div>Create your Stack Overflow account. It’s free</div>
						<div> and only takes a minute.</div>
					</div>
					<div>
						<div className=" mx-auto">
							<button
								type="button"
								onClick={googleLoginHandler}
								className="w-full rounded bg-white my-1 py-2  text-center text-base   hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 block"
							>
								<FcGoogle className="inline text-xl mr-1" />
								Sign up with Google
							</button>
							<button
								type="button"
								className="w-full rounded bg-grayblack-100 my-3 py-2 text-center text-white text-base  hover:bg-grayblack-200 focus:outline-none focus:ring focus:ring-blue-300 block"
							>
								<AiOutlineGithub className="inline text-xl mr-1" />
								Sign up with GitHub
							</button>
							<button
								type="button"
								className="w-full rounded bg-green-500  my-3 py-2 text-center text-white text-base  hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300 block"
								onClick={naverLoginHandler}
							>
								<SiNaver className="inline text-xl mr-1" /> Sign up with Naver
							</button>
							<form className="lg:w-full bg-white p-5 mt-6 drop-shadow-md rounded-md">
								<div className="font-medium mb-1 text-base">Display name</div>
								<input
									type="name"
									onChange={onChangeName}
									className="rounded w-full border-solid  border-[1.5px] focus:outline-none focus:ring focus:ring-blue-200 py-1 pl-2"
								/>
								<div className="font-medium mb-1 mt-4 text-base">Email</div>
								<input
									onChange={onChangeEmail}
									type="email"
									className="rounded w-full border-solid  border-[1.5px] focus:outline-none focus:ring focus:ring-blue-200 py-1 pl-2"
								/>
								{/* 이부분 커스텀 필요!! */}
								<div className=" font-medium mb-1 mt-4 text-base">Password</div>
								<input
									type="password"
									onChange={onChangePassWord}
									className="rounded-md w-full border-solid  border-[1.5px] focus:outline-none focus:ring focus:ring-blue-200 py-1 pl-2"
								/>
								<div className="mt-2 text-xs text-gray-500">
									Passwords must contain at least eight characters,
								</div>
								<div className="mb-2 text-xs text-gray-500">
									including at least 1 letter and 1 number.
								</div>
								{/* 캅차 */}
								<div className="border py-3 bg-gray-200 rounded-sm border-solid border-gray-300">
									{/* <div className="bg-gray-100 mx-4 my-2"> */}
									<div className="py-3 text-center bg-gray-100 mx-14  border rounded-sm border-solid border-gray-300 shadow-md">
										<div>
											<div className="text-base mt-4 mb-8 flex items-center justify-center">
												<input
													type="checkbox"
													className="border w-6 h-6 border-solid border-gray-300 focus:ring focus:ring-blue-200 rounded-md mt-1 mr-3"
												/>
												<div>I&apos;m not a robot</div>
											</div>
											<div className="text-xs text-gray-500  flex items-center justify-center">
												<img
													alt="recatcha"
													src="/image/recaptcha.png"
													className="w-6 mr-1"
												/>
												<span>reCAPCHA</span>
											</div>
											<div className="text-xs text-gray-500">
												Privacy - Terms
											</div>
										</div>
									</div>
									{/* </div> */}
								</div>
								<div className="flex items-start my-4">
									<input
										type="checkbox"
										className="border-solid  border-gray-300 focus:ring focus:ring-blue-200 rounded-md mt-1"
									/>
									<div className="text-xs ml-1 text-gray-700">
										<div className="flex justify-between align-middle">
											Opt-in to receive occasional product
											<FaQuestionCircle className=" text-gray-500 text-sm" />
										</div>
										<div>updates, user research invitations, company </div>
										<div>announcements, and digests.</div>
									</div>
								</div>
								<button
									className="bg-blue-500 rounded w-full mb-8 py-2 text-white text-sm  hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
									type="submit"
									onClick={clickRegister}
								>
									Sign up
								</button>
								<div className="text-xs text-gray-500">
									By clicking “Sign up”, you agree to our terms of
								</div>
								<div className="text-xs text-gray-500">
									service, privacy policy and cookie policy
								</div>
							</form>
						</div>
					</div>
					<div className="text-sm mt-10 ">
						Already have an account?
						<Link
							to="/login"
							className="ml-1 text-sm text-blue-500 hover:text-sky-500"
						>
							Log in
						</Link>
					</div>
					<div className="mt-2 mb-7 text-sm">
						Are you an employer?
						<span className="ml-1 text-sm  text-blue-500 hover:text-sky-500">
							Sign up on Talent
							<MdOutlineOpenInNew className="inline ml-1" />
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
