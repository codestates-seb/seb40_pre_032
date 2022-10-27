import React from 'react';
import Question from '../components/Question';
import QuestionTitle from '../components/QuestionTitle';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';
import Answer from '../components/Answer';
import AnswerTitle from '../components/AnswerTitle';

function QuestionDetail() {
	return (
		<div>
			<Header />
			<div className="flex justify-center">
				<div className="flex flex-row">
					<LeftSidebar />
					<div className="border-l-2 border-gray-200 px-4">
						<QuestionTitle />
						<div className="flex flex-row">
							<div>
								<Question />
								<AnswerTitle />
								<Answer />
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
