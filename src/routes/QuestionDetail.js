import React from 'react';
import Question from '../components/QuestionDetail/Question';
import QuestionHeader from '../components/QuestionDetail/QuestionHeader';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';
import Answer from '../components/QuestionDetail/Answer';
import AnswerHeader from '../components/QuestionDetail/AnswerHeader';

function QuestionDetail() {
	return (
		<div>
			<Header />
			<div className="flex justify-center">
				<LeftSidebar />
				<div className="flex flex-row">
					<div className="border-l-2 border-gray-200 px-4">
						<QuestionHeader />
						<div className="flex flex-row">
							<div>
								<Question />
								<AnswerHeader />
								<Answer />
							</div>
							<RightSidebar />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default QuestionDetail;
