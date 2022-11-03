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

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/ask" element={<Editor />} />
						{/* 임시로 질문 수정, 답변 수정 페이지 연결해두었습니다 */}
						<Route path="/questions/:questionId/edit" element={<Editor />} />
						<Route path="/answers/:answerId/edit" element={<Editor />} />
						{/* 임시로 질문 수정, 답변 수정 페이지 연결해두었습니다 */}
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
