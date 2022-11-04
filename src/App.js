import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MainPage from './components/Mainpage/MainPage';
import Login from './routes/login';
import SignUp from './routes/signUp';
import Editor from './components/Editor';
import Loading from './components/Loading';
import Logout from './routes/logout';
import MyPage from './routes/myPage';
import Callback from './routes/callback';
import AnswerEdit from './routes/AnswerEdit';
import QuestionEdit from './routes/QuestionEdit';
import QuestionDetail from './routes/QuestionDetail';
import NotFound from './components/NotFound';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			suspense: true,
			refetchOnWindowFocus: false,
		},
	},
});

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
