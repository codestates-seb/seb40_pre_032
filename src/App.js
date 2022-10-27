import React from 'react';
import Qlist from './components/Qlist';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import LoginHedaer from './components/LoginHedaer';

export default function App() {
	return (
		<div className="flex flex-col ">
			<LoginHedaer />
			<div className="flex  justify-center w-full">
				<Sidebar />
				<Qlist />
				<RightSidebar />
			</div>
			<Footer />
		</div>
	);
}
