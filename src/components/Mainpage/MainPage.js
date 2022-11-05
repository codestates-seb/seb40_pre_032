/* eslint-disable */
import React from 'react';
import { useRecoilValue } from 'recoil';
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import Qlist from '../Qlist';
import RightSidebar from '../RightSidebar';
import Footer from '../Footer';
import LoginHeader from '../LoginHeader';
import authAtom from '../../_state/userAuth'; // 토큰과 사용자 정보가 들어있는 장소

export default function MainPage() {
	const user = useRecoilValue(authAtom);
	return (
		<div className="flex flex-col items-center">
			{user === '' ? <Header /> : <LoginHeader />}
			<div className="flex pt-[51px] justify-center">
				<LeftSidebar />
				<Qlist />
				<RightSidebar />
			</div>
			<Footer />
		</div>
	);
}
