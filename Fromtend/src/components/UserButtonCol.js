import React from 'react';

export default function UserButtonCol() {
	return (
		<div>
			<div className="mx-7">
				<button
					type="button"
					className=" py-2 px-4 mr-2 rounded-3xl  bg-orange-500 text-white hover:bg-orange-600"
				>
					Profile
				</button>
				<button
					type="button"
					className="py-2 px-4 mr-2  rounded-3xl hover:bg-gray-100 active:bg-orange-500 active:text-white"
				>
					Activity
				</button>
				<button
					type="button"
					className="py-2 px-4 mr-2  rounded-3xl hover:bg-gray-100 active:bg-orange-500 active:text-white"
				>
					Saves
				</button>
				<button
					type="button"
					className="py-2 px-4 mr-2  rounded-3xl hover:bg-gray-100 active:bg-orange-500 active:text-white"
				>
					Settings
				</button>
			</div>
		</div>
	);
}
