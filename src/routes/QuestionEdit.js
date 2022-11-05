import React from 'react';
import { useRecoilValue } from 'recoil';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import QuestionEditor from '../components/QuestionEdit/QuestionEditor';
import Footer from '../components/Footer';
import userAtom from '../_state/userAuth';
import LoginHeader from '../components/LoginHeader';

function QuestionEdit() {
	const user = useRecoilValue(userAtom);
	return (
		<div>
			{user === '' ? <Header /> : <LoginHeader />}
			<div className="flex justify-center ">
				<LeftSidebar />
				<div className="border-l-2 border-gray-200 px-4 w-[1120px] flex flex-row">
					<QuestionEditor />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default QuestionEdit;
