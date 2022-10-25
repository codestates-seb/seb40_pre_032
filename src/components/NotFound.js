import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="bg-gray-100 w-screen flex justify-center h-screen items-center">
			<div className="flex flex-row p-6">
				<div className="p-6">
					<svg
						aria-hidden="true"
						className="mtn48 sm:d-none svg-spot spotAlertXL"
						width="196"
						height="196"
						viewBox="0 0 196 196"
					>
						<path
							opacity=".07"
							d="M143.05 18.44C100.21 4.5 55.18 11.8 30.5 34.5c-25 23-27.88 56.81-24 71.5 3.88 14.69 20.34 65 49.5 71s90.25 14.13 121.01-22.8c30.76-36.92 3.69-123.5-33.96-135.76Zm-35.88 14.71 58.13 100.7a9.43 9.43 0 0 1-8.17 14.15H40.87a9.43 9.43 0 0 1-8.17-14.15l58.13-100.7a9.43 9.43 0 0 1 16.34 0Z"
						/>
						<path
							d="M111.44 41.15a7.43 7.43 0 0 0-12.88 0l-58.14 100.7A7.43 7.43 0 0 0 46.86 153h116.28c5.72 0 9.3-6.2 6.44-11.15l-58.14-100.7ZM109 126.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0Zm-17-64a7.5 7.5 0 1 1 15 0v41a7.5 7.5 0 0 1-15 0v-41ZM58.82 39.93a3.5 3.5 0 0 0-1.4 4.74L62.49 54a3.5 3.5 0 0 0 6.15-3.35l-5.07-9.31a3.5 3.5 0 0 0-4.75-1.4ZM37.65 52.02a3.5 3.5 0 0 1 3.52-6.04L60.26 57.1a3.5 3.5 0 1 1-3.53 6.04L37.65 52.02Zm113.84 14.65a3.5 3.5 0 0 0-6.15-3.34l-5.08 9.31a3.5 3.5 0 0 0 6.15 3.35l5.08-9.32Zm21.03 2.57a3.5 3.5 0 0 1-1.26 4.78l-19.09 11.13a3.5 3.5 0 1 1-3.52-6.04l19.08-11.13a3.5 3.5 0 0 1 4.79 1.26Zm-3.32 26.28a3.5 3.5 0 0 1-3.9 3.05l-13.73-1.7a3.5 3.5 0 1 1 .86-6.95l13.72 1.7a3.5 3.5 0 0 1 3.05 3.9Zm-129.5-22a3.5 3.5 0 0 0 3.91 3.05l13.72-1.7a3.5 3.5 0 1 0-.85-6.95l-13.73 1.7a3.5 3.5 0 0 0-3.04 3.9Z"
							opacity=".2"
						/>
						<path d="m149.37 17 4.63 4.5-4.5 4.5-4.5-4.5 4.37-4.5Zm8.92 145 9.29 9.29-9.3 9.29-9.28-9.3 9.29-9.28Zm-3.1 9.29 3.1 3.1 3.1-3.1-3.1-3.1-3.1 3.1ZM99.5 136a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Zm0-4a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm0-77a7.5 7.5 0 0 0-7.5 7.5v41a7.5 7.5 0 0 0 15 0v-41a7.5 7.5 0 0 0-7.5-7.5ZM96 62.5a3.5 3.5 0 1 1 7 0v41a3.5 3.5 0 1 1-7 0v-41Zm-5.17-29.35a9.43 9.43 0 0 1 16.34 0l58.13 100.7a9.43 9.43 0 0 1-8.17 14.15H40.87a9.43 9.43 0 0 1-8.17-14.15l58.13-100.7Zm12.87 2a5.43 5.43 0 0 0-9.4 0l-58.13 100.7a5.43 5.43 0 0 0 4.7 8.15h116.26c4.18 0 6.8-4.53 4.7-8.15L103.7 35.15ZM13 112a2 2 0 0 1 2 2v4h4a2 2 0 1 1 0 4h-4v4a2 2 0 1 1-4 0v-4H7a2 2 0 1 1 0-4h4v-4c0-1.1.9-2 2-2Z" />
					</svg>
				</div>
				<div className="p-6">
					<h1 className="text-2xl font-normal">Page Not Found</h1>
					<p className="font-light">
						We&apos;re sorry, we couldn&apos;t find the page you requested.
					</p>
					<br />
					<p className="font-light">
						Try searching for{' '}
						<Link className="text-blue-500 font-light" to="/questions">
							similar questions
						</Link>
					</p>
					<p className="font-light">
						Browse our{' '}
						<Link className="text-blue-500 font-light" to="/questions">
							recent questions
						</Link>
					</p>
					<p className="font-light">
						Browse our{' '}
						<Link className="text-blue-500 font-light" to="/tags">
							popular tags
						</Link>
					</p>
					<p className="font-light">
						If you feel something is missing that should be here,{' '}
						<Link className="text-blue-500 font-light" to="/questions">
							contact us.
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
