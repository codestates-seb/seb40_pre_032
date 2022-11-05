/* eslint-disable */
import React from 'react';
import { useParams } from 'react-router-dom';
import QuestionContainer from '../components/QuestionDetail/QuestionContainer';
import QuestionHeader from '../components/QuestionDetail/QuestionHeader';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';
import AnswerHeader from '../components/QuestionDetail/AnswerHeader';
import AnswerContainer from '../components/QuestionDetail/AnswerContainer';
import AnswerEditor from '../components/QuestionDetail/AnswerEditor';
import { getQuestionById } from '../utils/hooks/useQuestion';
import { useRecoilValue } from 'recoil';
import userAtom from '../_state/userAuth';

function QuestionDetail() {
	const user = useRecoilValue(userAtom);
	const { questionId } = useParams();
	const data = getQuestionById(questionId);

	return (
		<div>
			{user === '' ? <Header /> : <LoginHeader />}
			<div className="flex justify-center ">
				<LeftSidebar />
				<div className="border-l-2 border-gray-200 px-4 w-[1120px]">
					<QuestionHeader />
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
