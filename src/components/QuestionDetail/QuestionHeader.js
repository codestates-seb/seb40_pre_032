/* eslint react/prop-types: 0 */
import React from 'react';

function QuestionHeader({ isLoading, data, isError, error }) {
	if (isLoading) return <h2>Loading...</h2>;
	if (isError) return <h2>{error.message}</h2>;

	console.log(data?.creationDate);

	function elapsed(string) {
		const today = new Date();
		const targetDate = new Date(string);
		const elapsedTime = today.getDate() - targetDate.getDate();

		if (elapsedTime === 0) {
			return 'today';
		}
		if (elapsedTime <= 30) {
			if (elapsedTime === 1) {
				return '1 day ago';
			}
			return `${elapsedTime} days ago`;
		}
		if (elapsedTime > 30 && elapsedTime < 365) {
			if (Math.round(elapsedTime / 30) === 1) {
				return '1 month ago';
			}
			return `${Math.round(elapsedTime / 30)} months ago`;
		}
		if (elapsedTime > 365) {
			if (Math.round(elapsedTime / 365) === 1) {
				return '1 year ago';
			}
			return `${Math.round(elapsedTime / 365)} years ago`;
		}

		return elapsedTime;
	}

	return (
		<div className="mt-[47px] py-[20px]">
			<div className="flex flex-row justify-between">
				<h1 className="text-2xl">{data?.title}</h1>
				<button
					className="rounded-sm text-sm p-2 text-white bg-[#0a94ff] hover:bg-[#0074CC]"
					type="button"
				>
					Ask Question
				</button>
			</div>
			<div className="border-gray-200 flex border-b-2 flex-row mb-4">
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Asked</span>
					<span className="text-sm py-2 mr-3">
						{elapsed(data?.creationDate)}
					</span>
				</div>
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Modified</span>
					<span className="text-sm py-2 mr-3">{elapsed(data?.modifiedAt)}</span>
				</div>
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Viewed</span>
					<span className="text-sm py-2 mr-3">{data?.viewCount}</span>
				</div>
			</div>
		</div>
	);
}

export default QuestionHeader;
