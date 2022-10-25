import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import NotFound from './components/NotFound';

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
