/* eslint-disable */
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

import Editor from './components/Editor';

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
				<Editor />
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
