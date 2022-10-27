import React from 'react';

function QuestionContent() {
	return (
		<div className="flex flex-row">
			{/* votecell */}
			<div className="w-[40px] mr-4">
				<div className="flex justify-center">
					<svg
						aria-hidden="true"
						className=""
						width="36"
						height="36"
						viewBox="0 0 36 36"
					>
						<path fill="lightgrey" d="M2 25h32L18 9 2 25Z" />
					</svg>
				</div>
				<div className="flex justify-center text-gray-700">2</div>
				<div className="flex justify-center mb-2">
					<svg
						aria-hidden="true"
						className=""
						width="36"
						height="36"
						viewBox="0 0 36 36"
					>
						<path fill="lightgrey" d="M2 11h32L18 27 2 11Z" />
					</svg>
				</div>
				<div className="flex justify-center mb-3">
					<button type="button">
						<svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
							<path
								fill="lightgrey"
								d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"
							/>
						</svg>
					</button>
				</div>
				<div className="flex justify-center">
					<svg
						aria-hidden="true"
						className=""
						width="19"
						height="18"
						viewBox="0 0 19 18"
					>
						<path
							fill="lightgrey"
							d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z"
						/>
					</svg>
				</div>
			</div>
			{/* postcell */}
			<div className="flex flex-col w-[660px]">
				{/* content */}
				<p className="mb-4">
					I wish for this mySecondClass to have all the properties and methods
					from myFirstClass but to replace the type of some properties and
					replace some functions, in this example I wish to change: attr1 from
					string to boolean firstMethod from outputting
				</p>
				{/* tags */}
				<div>
					<button className="" type="button">
						react
					</button>
					<button type="button">react</button>
					<button type="button">react</button>
				</div>
				{/* userinfo */}
				<div className="flex flex-row">
					<div className="flex flex-row">
						<div>Share</div>
						<div>Edit</div>
						<div>Follow</div>
					</div>
					<div>
						<div>userinfo</div>
					</div>
					<div>
						<div>userinfo</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuestionContent;
