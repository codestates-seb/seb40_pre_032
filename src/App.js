import React from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Qlist from './components/Qlist';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';

export default function App() {
	return (
		<div className="flex flex-col items-center">
			<Header />
			<div className="flex">
				<LeftSidebar />
				<Qlist />
				<RightSidebar />
			</div>
			<Footer />
		</div>
	);
}
