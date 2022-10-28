import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Question from '../components/QuestionDetail/Question';
import QuestionHeader from '../components/QuestionDetail/QuestionHeader';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';
import Answer from '../components/QuestionDetail/Answer';
import AnswerHeader from '../components/QuestionDetail/AnswerHeader';
import AnswerEditor from '../components/QuestionDetail/AnswerEditor';

function QuestionDetail() {
	const { questionId } = useParams;
	const { status, data, error } = useQuery('question', () => {
		return axios.get(`http://localhost:4000/${questionId}`);
	});

	console.log(status, data, error);
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
								<AnswerEditor />
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
