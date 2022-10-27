import React from 'react';
import Qlist from './component/Qlist';
import Sidebar from './component/Sidebar';
import RightSidebar from './component/RightSidebar';
import Footer from './component/Footer';

function App() {
	return (
		<div className="flex flex-col ">
			<div className="flex  justify-center w-full">
				<Sidebar />
				<Qlist />
				<RightSidebar />
			</div>
			<Footer />
		</div>
	);
}

export default App;
