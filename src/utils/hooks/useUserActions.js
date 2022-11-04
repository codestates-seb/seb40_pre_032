import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authAtom from '../../_state/auth';
import userAtom from '../../_state/userAuth';
// import userAtom from '../_state/userAuth';

export default function useUserActions() {
	// const auth = useRecoilValue(authAtom);
	// const userAuth = useRecoilValue(userAtom);
	const navigate = useNavigate();
	// const baseUrl = `http://ec2-15-165-146-60.ap-northeast-2.compute.amazonaws.com:8080`;
	const baseUrl = `http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080`;
	const setAuth = useSetRecoilState(authAtom);
	const setUser = useSetRecoilState(userAtom);
	// const setUserAuth = useSetRecoilState(userAuth); // set함수 반환

	function login(email, password) {
		return axios
			.post(
				`${baseUrl}/users/signup`,
				{ email, password },
				{ withCredentials: true },
			)
			.then((response) => {
				console.log(response);
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('user', JSON.stringify(response.data));
				setAuth(response.data);
				setUser('get 한 후에 넣을 데이터');
				// get return url from location state or default to home page
				navigate('/');
			})
			.catch((error) => alert(error));
	}

	function translateToken() {
		// return axios.post(`url`, { token: auth }).then((response) => {
		// setUserAuth(response.data);
		// });
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
		login,
		naverLogin,
		githubLogin,
		googleLogin,
		translateToken,
	};
}
