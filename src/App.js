/* eslint-disable */
import axios from 'axios';
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
import MainPage from './components/Mainpage/MainPage';
import Editor from './components/Editor';
import Callback from './routes/callback';
import AnswerEdit from './routes/AnswerEdit';
import QuestionEdit from './routes/QuestionEdit';
import { useRecoilValue } from 'recoil';
import authAtom from '../src/_state/auth';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			suspense: true,
			refetchOnWindowFocus: false,
		},
	},
});

const auth = useRecoilValue(authAtom);
axios.defaults.headers.common['Authorization'] = auth;

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/ask" element={<Editor />} />
						<Route
							path="/questions/:questionId/edit"
							element={<QuestionEdit />}
						/>
						<Route path="/answers/:answerId/edit" element={<AnswerEdit />} />
						<Route path="/questions" element={<MainPage />} />
						<Route path="mypage" element={<MyPage />} />
						<Route path="login" element={<Login />} />
						<Route path="logout" element={<Logout />} />
						<Route path="signup" element={<SignUp />} />
						<Route path="questions/:questionId" element={<QuestionDetail />} />
						<Route path="callback/:params" element={<Callback />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
