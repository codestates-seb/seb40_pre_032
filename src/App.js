import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import NotFound from './component/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="questions" element={<Sidebar />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
