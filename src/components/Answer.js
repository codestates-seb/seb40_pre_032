import React from 'react';

function Answer() {
	return (
		<div className="mr-6 py-6">
			<div className="flex flex-row ">
				{/* button bar */}
				<div className="w-[40px] mr-4">
					<div className="flex justify-center">
						{/* up button */}
						<svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
							<path fill="lightgrey" d="M2 25h32L18 9 2 25Z" />
						</svg>
					</div>
					<div className="flex justify-center text-gray-700">2</div>
					<div className="flex justify-center mb-2">
						{/* down button */}
						<svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
							<path fill="lightgrey" d="M2 11h32L18 27 2 11Z" />
						</svg>
					</div>
					<div className="flex justify-center mb-3">
						<button type="button">
							{/* bookmark icon */}
							<svg
								aria-hidden="true"
								width="18"
								height="18"
								viewBox="0 0 18 18"
							>
								<path
									fill="lightgrey"
									d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"
								/>
							</svg>
						</button>
					</div>
					<div className="flex justify-center">
						{/* history icon */}
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
					<p className="mb-4 break-all">
						I wish for this mySecondClass to have all the properties and methods
						from myFirstClass but to replace the type of some properties and
						replace some functions, in this example I wish to change: attr1 from
						string to boolean firstMethod from outputting I wish for this
						mySecondClass to have all the properties and methods from
						myFirstClass but to replace the type of some properties and replace
						some functions, in this example I wish to change: attr1 from string
						to boolean firstMethod from outputting I wish for this mySecondClass
						to have all the properties and methods from myFirstClass but to
						replace the type of some properties and replace some functions, in
						this example I wish to change: attr1 from string to boolean
						firstMethod from outputting I wish for this mySecondClass to have
						all the properties and methods from myFirstClass but to replace the
						type of some properties and replace some functions, in this example
						I wish to change: attr1 from string to boolean firstMethod from
						outputting I wish for
						thisasdasdasdajsdkajskldjklasjdklasjdklajskldjaklsdjaskldjalksjdklajlksd
					</p>
					{/* tags */}
					<div className="mb-4">
						<span className="rounded-sm align-middle px-2 py-1 mr-2 bg-sky-100 text-blue-500 text-sm">
							react
						</span>
						<span className="rounded-sm align-middle px-2 py-1 mr-2 bg-sky-100 text-blue-500 text-sm">
							react
						</span>
						<span className="rounded-sm align-middle px-2 py-1 mr-2 bg-sky-100 text-blue-500 text-sm">
							react
						</span>
					</div>
					{/* userinfo */}
					<div className="flex flex-row h-[50px]">
						<div className="w-[260px]">
							<button className="mr-2 text-sm text-gray-500" type="button">
								Share
							</button>
							<button className="mr-2 text-sm text-gray-500" type="button">
								Edit
							</button>
							<button className="mr-2 text-sm text-gray-500" type="button">
								Follow
							</button>
						</div>
						{/* 수정된 적 없으면 빈칸 */}
						<div className="w-[200px]">
							<button type="button" className="text-blue-500 text-sm">
								edited 22 mins ago
							</button>
						</div>
						<div className="w-[190px] bg-sky-100 px-2 py-1">
							<div className="text-gray-500 text-sm">asked 21 hours ago</div>
							<div className="text-blue-500 text-sm">author</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Answer;
