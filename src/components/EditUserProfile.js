import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function EditUserProfile() {
	return (
		<div className="flex items-center">
			<FaUserCircle className="w-20 h-20 text-gray-600 bg-gray-100 shadow p-1 mr-3" />
			<div className="my-2">
				<div className="text-3xl font-semibold">Display Name</div>
				<div className="mt-2">
					Welcome to stack overflow! Try answering a question!
				</div>
			</div>
		</div>
	);
}
