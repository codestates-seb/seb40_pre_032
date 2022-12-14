/* eslint react/prop-types: 0 */
import React from 'react';

function Tag({ tag }) {
	return (
		<li>
			<span className="rounded-sm align-middle px-2 py-1 mr-2 bg-sky-100 text-blue-500 text-sm">
				{tag}
			</span>
		</li>
	);
}

export default Tag;
