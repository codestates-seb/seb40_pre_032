import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function EditUserProfile() {
	return (
		<div className="flex items-center">
			<FaUserCircle className="w-20 h-20 text-gray-600 bg-gray-200 shadow p-1 mr-3" />
			<div className="my-2">
				<div className="text-3xl font-semibold">Display Name</div>
				<div className="mt-2">
					Member for 6 days Last seen this week Visited 5 days, 4 consecutive
				</div>
			</div>
		</div>
	);
}
