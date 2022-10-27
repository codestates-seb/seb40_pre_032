import React from 'react';

export default function UserButtonCol() {
	return (
		<div>
			<div className="mx-10">
				<button
					type="button"
					className="py-2 px-4 mr-2 rounded-3xl hover:bg-gray-100 focus:bg-orange-500 focus:text-white"
				>
					Profile
				</button>
				<button
					type="button"
					className="py-2 px-4 mr-2  rounded-3xl hover:bg-gray-100 focus:bg-orange-500 focus:text-white"
				>
					Activity
				</button>
				<button
					type="button"
					className="py-2 px-4 mr-2  rounded-3xl hover:bg-gray-100 focus:bg-orange-500 focus:text-white"
				>
					Saves
				</button>
				<button
					type="button"
					className="py-2 px-4 mr-2  rounded-3xl hover:bg-gray-100 focus:bg-orange-500 focus:text-white"
				>
					Settings
				</button>
			</div>
		</div>
	);
}
