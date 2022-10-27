import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import NotFound from './component/NotFound';
import Login from './routes/login';
import Logout from './routes/logout';
import SignUp from './routes/signUp';
import MyPage from './routes/myPage';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="mypage" element={<MyPage />} />
				<Route path="login" element={<Login />} />
				<Route path="logout" element={<Logout />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="questions" element={<Sidebar />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
