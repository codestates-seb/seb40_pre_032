import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainPage from './components/MainPage/MainPage';
import Login from './routes/login';
import SignUp from './routes/signUp';
import Editor from './components/Editor';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/ask" element={<Editor />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}
