import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import NotFound from './components/NotFound';
import Login from './routes/login';
import Logout from './routes/logout';
import SignUp from './routes/signUp';
import MyPage from './routes/myPage';
import QuestionDetail from './routes/QuestionDetail';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="mypage" element={<MyPage />} />
					<Route path="login" element={<Login />} />
					<Route path="logout" element={<Logout />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="questions/:questionId" element={<QuestionDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
