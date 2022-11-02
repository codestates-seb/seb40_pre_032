import React from 'react';
// import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import Qlist from '../Qlist';
import RightSidebar from '../RightSidebar';
import Footer from '../Footer';
import LoginHeader from '../LoginHeader';

export default function MainPage() {
	// const test = 1;

	return (
		<div className="flex flex-col items-center">
			<LoginHeader />
			<div className="flex pt-[51px] justify-center">
				<LeftSidebar />
				<Qlist />
				<RightSidebar />
			</div>
			<Footer />
		</div>
	);
}
