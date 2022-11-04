// import{ useEffect } from 'react'; // useEffect
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authAtom from '../../_state/auth';
import userAtom from '../../_state/userAuth';

export default function useUserActions() {
	const navigate = useNavigate();
	// const baseUrl = `http://ec2-15-165-146-60.ap-northeast-2.compute.amazonaws.com:8080`;
	const baseUrl = `http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080`;

	function translateToken() {
		const auth = useRecoilValue(authAtom);
		const userAuth = useRecoilValue(userAtom);
		const setUserAuth = useSetRecoilState(userAuth); // set함수 반환
		axios
			.get(
				'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/users/myPage',
				{
					accessToken: `${auth}`,
				},
			)
			.then((response) => {
				localStorage.setItem('userInfo', JSON.stringify(response.data));
				console.log(response.data);
				setUserAuth(response.data);
			})
			.then(() => navigate('/'))
			.catch((error) => {
				alert('error', error);
			});
	}

	function naverLogin() {
		const NAVER_LOGIN_URL = `${baseUrl}/oauth2/authorization/naver`;
		window.location.href = NAVER_LOGIN_URL;
	}

	function githubLogin() {
		const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=82422b0d46b1255e9450`;
		window.location.href = GITHUB_LOGIN_URL;
	}

	function googleLogin() {
		const GOOGLE_LOGIN_URL = `${baseUrl}/oauth2/authorization/google`;
		window.location.href = GOOGLE_LOGIN_URL;
	}

	return {
		naverLogin,
		githubLogin,
		googleLogin,
		translateToken,
	};
}
