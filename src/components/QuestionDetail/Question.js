import React from 'react';
import ContentContainer from './ContentContainer';
import Votebar from './Votebar';

function Question() {
	return (
		<div className="mr-6">
			<div className="flex flex-row ">
				<Votebar />
				<ContentContainer />
			</div>
		</div>
	);
}

export default Question;
