/* eslint-disable */
import React from 'react';
import { useRecoilValue } from 'recoil'; // 전역 상태값 불러오는 함수
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import Qlist from '../Qlist';
import RightSidebar from '../RightSidebar';
import Footer from '../Footer';
import LoginHeader from '../LoginHeader';
import authAtom from '../../_state/auth'; // 토큰과 사용자 정보가 들어있는 장소

export default function MainPage() {
	const auth = useRecoilValue(authAtom);
	// console.log(auth);
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
