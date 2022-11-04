import React from 'react';
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import Qlist from '../Qlist';
import RightSidebar from '../RightSidebar';
import Footer from '../Footer';
<<<<<<< HEAD
=======
import LoginHeader from '../LoginHeader';
import authAtom from '../../_state/auth'; // 토큰과 사용자 정보가 들어있는 장소
>>>>>>> 3e82a48fda185513f4e0d4948e58bb50dac54ac7

export default function MainPage() {
	return (
		<div className="flex flex-col items-center">
			{auth === null ? <Header /> : <LoginHeader />}
			<div className="flex pt-[51px] justify-center">
				<LeftSidebar />
				<Qlist />
				<RightSidebar />
			</div>
			<Footer />
		</div>
	);
}
