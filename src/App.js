import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import NotFound from './components/NotFound';
import Login from './routes/login';
import Logout from './routes/logout';
import SignUp from './routes/signUp';
import MyPage from './routes/myPage';
import QuestionDetail from './routes/QuestionDetail';
import Loading from './components/Loading';

const queryClient = new QueryClient();

export default function App() {
	// constructor() {
	//   super();
	//   this.state = {
	//     isLogin: false,
	//     accessToken: "",
	//   };
	//   this.getAccessToken = this.getAccessToken.bind(this);
	// }

	// async getAccessToken(authorizationCode) {
	//   // 받아온 authorization code로 다시 OAuth App에 요청해서 access token을 받을 수 있다.
	//   // access token은 보안 유지가 필요하기 때문에 클라이언트에서 직접 OAuth App에 요청을 하는 방법은 보안에 취약할 수 있다.
	//   // authorization code를 서버로 보내주고 서버에서 access token 요청을 하는 것이 적절하다.
	//   // 서버의 /callback 엔드포인트로 authorization code를 보내주고 access token을 받아온다.
	//   // access token을 받아온 후
	//   //  - 로그인 상태를 true로 변경하고,
	//   //  - state에 access token을 저장하자

	//   let res = await axios.post("http://localhost:8080/callback", {
	//     authorizationCode,
	//   });

	//   this.setState({
	//     isLogin: true,
	//     accessToken: res.data.accessToken,
	//   });
	// }

	// componentDidMount() {
	//   const url = new URL(window.location.href);
	//   const authorizationCode = url.searchParams.get("code");
	//   if (authorizationCode) {
	//     // authorization server로부터 클라이언트로 리디렉션된 경우, authorization code가 함께 전달된다.
	//     // ex) http://localhost:3000/?code=5e52fb85d6a1ed46a51f
	//     this.getAccessToken(authorizationCode);
	//   }
	// }

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="mypage" element={<MyPage />} />
						<Route path="login" element={<Login />} />
						<Route path="logout" element={<Logout />} />
						<Route path="signup" element={<SignUp />} />
						<Route path="questions/:id" element={<QuestionDetail />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
