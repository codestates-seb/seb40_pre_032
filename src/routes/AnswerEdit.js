import React from 'react';
import LeftSidebar from '../components/LeftSidebar';
import Footer from '../components/Footer';
import AnswerEditor from '../components/AnswerEdit/AnswerEditor';
import LoginHeader from '../components/LoginHeader';

function QuestionEdit() {
	return (
		<>
			<LoginHeader />
			<div className="flex justify-center">
				<LeftSidebar />
				<div className="border-l-2 border-gray-200 px-4 w-[1120px] flex flex-row">
					<AnswerEditor />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default QuestionEdit;
