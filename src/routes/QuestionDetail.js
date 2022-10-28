import React from 'react';
import Question from '../components/QuestionDetail/Question';
import QuestionTitle from '../components/QuestionDetail/QuestionTitle';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';
import Answer from '../components/QuestionDetail/Answer';
import AnswerTitle from '../components/QuestionDetail/AnswerTitle';

function QuestionDetail() {
	return (
		<div>
			<Header />
			<div className="flex justify-center">
				<LeftSidebar />
				<div className="flex flex-row">
					<div className="border-l-2 border-gray-200 px-4">
						<QuestionTitle />
						<div className="flex flex-row">
							<div>
								<Question />
								<AnswerTitle />
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
