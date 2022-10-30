import React from 'react';
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import Qlist from '../Qlist';
import RightSidebar from '../RightSidebar';
import Footer from '../Footer';

export default function MainPage() {
	return (
		<div className="flex flex-col items-center">
			<Header />
			<div className="flex pt-[51px]">
				<LeftSidebar />
				<Qlist />
				<RightSidebar />
			</div>
			<Footer />
		</div>
	);
}
