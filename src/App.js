import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
