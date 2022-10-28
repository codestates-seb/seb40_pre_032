import React from 'react';
import ContentContainer from './ContentContainer';
import Votebar from './Votebar';

function Answer() {
	return (
		<div className="mr-6 py-6">
			<div className="flex flex-row ">
				<Votebar />
				<ContentContainer />
			</div>
		</div>
	);
}

export default Answer;
