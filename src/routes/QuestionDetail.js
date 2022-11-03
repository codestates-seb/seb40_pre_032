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
import AnswerEditor from '../components/QuestionDetail/AnswerEditor';

function QuestionDetail() {
	const { questionId } = useParams();
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(
			`http://cors-anywhere.herokuapp.com/http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}`,
		);
	});

	return (
		<div>
			<Header />
			<div className="flex justify-center ">
				<LeftSidebar />
				<div className="border-l-2 border-gray-200 px-4 w-[1120px]">
					<QuestionHeader data={data?.data} />
					<div className="flex flex-row">
						<div>
							<QuestionContainer />
							<AnswerHeader />
							{data?.data.answers.length
								? data?.data.answers.map((answer) => {
										return (
											<AnswerContainer
												key={answer.answerId}
												answerId={answer.answerId}
											/>
										);
								  })
								: null}
							<AnswerEditor />
						</div>
						<RightSidebar />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default QuestionDetail;
