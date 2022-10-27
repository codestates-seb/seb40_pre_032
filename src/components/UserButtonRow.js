import React from 'react';
import { MdOutlineOpenInNew } from 'react-icons/md';

export default function UserButtonRow() {
	return (
		<div className="w-52 text-xs">
			<div className="mx-3 flex flex-col mb-3">
				<span className="font-semibold text-start pl-2 mb-1 mt-2">
					PERSONAL INFORMATION
				</span>
				<button
					type="button"
					className="pl-2 py-1 rounded-3xl hover:bg-gray-100  focus:bg-orange-500 focus:text-white text-start"
				>
					Edit profile
				</button>
				<button
					type="button"
					className="pl-2 py-1  rounded-3xl hover:bg-gray-100 focus:bg-orange-500 focus:text-white text-start"
				>
					Delete profile
				</button>
			</div>

			<div className="mx-3 flex flex-col mb-3">
				<span className="font-semibold text-start pl-2 mb-1 mt-4">
					SITE SETTINGS
				</span>
				<button
					type="button"
					className="pl-2 py-1  rounded-3xl hover:bg-gray-100 focus:bg-orange-500 focus:text-white text-start"
				>
					Edit email settings
				</button>
				<button
					type="button"
					className="pl-2 py-1  rounded-3xl hover:bg-gray-100 focus:bg-orange-500 focus:text-white text-start"
				>
					tag watching & ignoring
				</button>
				<button
					type="button"
					className="pl-2 py-1  rounded-3xl hover:bg-gray-100 focus:bg-orange-500 focus:text-white text-start"
				>
					community digests
				</button>
				<button
					type="button"
					className="pl-2 py-1  rounded-3xl hover:bg-gray-100 focus:bg-orange-500 focus:text-white text-start"
				>
					Question subscriptions <MdOutlineOpenInNew className="inline" />
				</button>
			</div>

			<div className="mx-3 flex flex-col mb-3">
				<span className="font-semibold text-start pl-2 mb-1 mt-4">ACCESS</span>
				<button
					type="button"
					className="pl-2 py-1  rounded-3xl hover:bg-gray-100 focus:bg-orange-500 focus:text-white text-start"
				>
					Your Collectives
				</button>
				<button
					type="button"
					className="pl-2 py-1 rounded-3xl hover:bg-gray-100 focus:bg-orange-500 focus:text-white text-start"
				>
					your logins
				</button>
			</div>

			<div className="mx-3 flex flex-col mb-3">
				<span className="font-semibold text-start pl-2 mb-1 mt-4">
					APPS & INTERGRATIONS
				</span>
				<button
					type="button"
					className="pl-2 py-1 hover:bg-gray-100 focus:bg-orange-500 focus:text-white text-start"
				>
					Authorized applications
				</button>
			</div>
		</div>
	);
}
