import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import QuestionDetail from './routes/QuestionDetail';

export default function App() {
	return (
		<BrowserRouter>
			<QuestionDetail />
		</BrowserRouter>
	);
}
