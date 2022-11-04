import React from 'react';
import { useRecoilValue } from 'recoil';
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import Qlist from '../Qlist';
import RightSidebar from '../RightSidebar';
import Footer from '../Footer';
import LoginHeader from '../LoginHeader';
<<<<<<< HEAD
import userAtom from '../../_state/userAuth'; // 토큰과 사용자 정보가 들어있는 장소

export default function MainPage() {
	const user = useRecoilValue(userAtom);
=======
import authAtom from '../../_state/userAuth'; // 토큰과 사용자 정보가 들어있는 장소

export default function MainPage() {
	const user = useRecoilValue(authAtom);
>>>>>>> 4860cc146ae8c171798c436f8bf23f235c13bc45
	return (
		<div className="flex flex-col items-center">
			{user === null ? <Header /> : <LoginHeader />}
			<div className="flex pt-[51px] justify-center">
				<LeftSidebar />
				<Qlist />
				<RightSidebar />
			</div>
			<Footer />
		</div>
	);
}
