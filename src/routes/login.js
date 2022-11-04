import React, { useState } from 'react'; // useEffect
import { Link } from 'react-router-dom'; // useNavigate
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiNaver } from 'react-icons/si';
import axios from 'axios';
import { useSetRecoilState } from 'recoil'; // useRecoilValue
import Header from '../components/Header';
import authAtom from '../_state/auth';
// import userAtom from '../_state/userAuth';
import useUserActions from '../utils/hooks/useUserActions';

export default function Login() {
	// const navigate = useNavigate();
	const userActions = useUserActions();

	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');

	const setAuth = useSetRecoilState(authAtom); // set함수 반환
	// const setUserAuth = useSetRecoilState(userAtom); // set함수 반환

	const onEmailChange = (e) => {
		setUserEmail(e.target.value);
	};
	const onPasswordChange = (e) => {
		setUserPassword(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		axios
			.post(
				`http://cors-anywhere.herokuapp.com/http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/users/login`,
				{ email: userEmail, password: userPassword },
			)
			.then((response) => {
				alert('로그인 되었습니다');
				const { data } = response;
				localStorage.setItem('user', JSON.stringify(data.accessToken));
				// localStorage.setItem('userInfo', JSON.stringify(data));
				setAuth(data.accessToken); // 전역 토큰 저장
				// setUserAuth(data);
			})
			// .then(() => {
			// 	const auth = useRecoilValue(authAtom);
			// 	axios
			// 		.get(
			// 			'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/users/myPage',
			// 			{
			// 				accessToken: auth,
			// 			},
			// 		)
			// 		.then((response) => {
			// 			localStorage.setItem('userInfo', JSON.stringify(response.data));
			// 			console.log(response.data);
			// 			setUserAuth(response.data);
			// 		})
			// 		.catch((error) => {
			// 			alert(error);
			// 		});
			// })
			.catch((error) => {
				alert(error);
				console.log(error);
			});
	};

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
								onClick={userActions.googleLogin}
							>
								<FcGoogle className="inline text-xl mr-1" />
								Log in with Google
							</button>

							<button
								type="button"
								className="w-full rounded  bg-grayblack-100 my-3 py-2 text-center text-white text-base  hover:bg-grayblack-200 focus:outline-none focus:ring focus:ring-blue-300 block"
								onClick={userActions.githubLogin}
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
									onClick={userActions.naverLogin}
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
									onClick={onSubmit}
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
