import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MainPage from './components/MainPage/MainPage';
import Login from './routes/login';
import SignUp from './routes/signUp';
import Editor from './components/Editor';
import Loading from './components/Loading';
import Logout from './routes/logout';
import Mypage from './routes/myPage';

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
						<Route path="/login" element={<Login />} />
						<Route path="/logout" element={<Logout />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/mypage" element={<Mypage />} />
						<Route path="/ask" element={<Editor />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</QueryClientProvider>
	);
}
