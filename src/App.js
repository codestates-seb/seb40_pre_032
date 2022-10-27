import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound';
import QuestionContent from './component/QuestionContent';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/questions" element={<QuestionContent />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
