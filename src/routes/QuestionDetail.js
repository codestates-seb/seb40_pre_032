import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import QuestionContainer from '../components/QuestionDetail/QuestionContainer';
import QuestionHeader from '../components/QuestionDetail/QuestionHeader';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';
import AnswerHeader from '../components/QuestionDetail/AnswerHeader';
import AnswerContainer from '../components/QuestionDetail/AnswerContainer';

function QuestionDetail() {
	const { id } = useParams();
	const { data } = useQuery(['question', id], () => {
		return axios.get(`http://localhost:4000/questions/${id}`);
	});

	return (
		<div>
			<Header />
			<div className="flex justify-center">
				<LeftSidebar />
				<div className="flex flex-row">
					<div className="border-l-2 border-gray-200 px-4">
						<QuestionHeader data={data?.data} />
						<div className="flex flex-row">
							<div>
								<QuestionContainer />
								<AnswerHeader />
								{data?.data.answers.map((answer) => {
									return (
										<AnswerContainer
											key={answer.answerId}
											answerId={answer.answerId}
										/>
									);
								})}
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
