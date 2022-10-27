import { Disclosure } from '@headlessui/react';
import React, { Fragment } from 'react';

function Accordian() {
	return (
		<div className="w-full px-4 pt-16">
			<div className="rounded-md mx-auto w-full h-3/6 max-w-md stroke-slate-600 border border-slate-500 shadow-xl p-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between px-4 py-2 text-sm font-medium border-b-2 focus:outline-none focus-visible:ring focus-visible:ring-purple-500">
								<span className="font-bold text-blue-700">1.</span>
								<span>
									<strong className="hover:text-gray-400">
										Summarize the problem
									</strong>
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={`${open ? 'rotate-180' : ''} h-5 w-5`}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm flex justify-center flex-col">
								<li>Include details about your goal</li>
								<li>Describe expected and actual results</li>
								<li>Include any error messages</li>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full border-b-2 justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500">
								<span className="font-bold text-blue-700">2.</span>
								<span>
									<strong className="hover:text-gray-400">
										Describe what you’ve tried
									</strong>
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={`${open ? 'rotate-180' : ''} h-5 w-5`}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
								Show what you’ve tried and tell us what you found (on this site
								or elsewhere) and why it didn’t meet your needs. You can get
								better answers when you provide research.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full border-b-2 justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring">
								<span className="font-bold text-blue-700">3.</span>
								<span>
									<strong className="hover:text-gray-400">
										Show some code
									</strong>
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={`${open ? 'rotate-180' : ''} h-5 w-5`}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
								https://stackoverflow.com/help/minimal-reproducible-example When
								appropriate, share the minimum amount of code others need to
								reproduce your problem{' '}
								<a
									className="text-blue-500 font-bold hover:text-blue-300"
									href="https://stackoverflow.com/help/minimal-reproducible-example"
								>
									(also called a minimum, reproducible example)
								</a>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
			<Disclosure
				as="div"
				className="rounded-md mx-auto w-full h-3/6 max-w-md stroke-slate-800 border border-slate-600 shadow-xl p-2 mt-10"
			>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500">
							<span>Have a non-programming question?</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className={`${open ? 'rotate-180' : ''} h-5 w-5`}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</Disclosure.Button>
						<Disclosure.Panel className="px-10 py-4 text-sm">
							<a
								className="text-blue-500 hover:text-blue-300"
								href="https://superuser.com/help/on-topic"
							>
								<div className="leading-tight">Super user</div>
							</a>
							Troubleshooting hardware and software issues
							<a
								className="text-blue-500 hover:text-blue-300"
								href="https://softwareengineering.stackexchange.com/"
							>
								<div className="leading-tight">Software Engineering</div>
							</a>
							For software development methods and process questions{' '}
							<a
								className="text-blue-500 hover:text-blue-300"
								href="https://hardwarerecs.stackexchange.com/help/on-topic"
							>
								<div className="leading-tight">Hardware recommendations</div>
							</a>
							<a href="https://softwarerecs.stackexchange.com/help/on-topic">
								<div className="leading-tight text-blue-500 hover:text-blue-300">
									Software recommendations
								</div>
							</a>
							<a href="https://meta.stackoverflow.com/">meta</a>
							Ask questions about the site on
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<Disclosure
				as="div"
				className="rounded-md mx-auto w-full h-3/6 max-w-md stroke-slate-800 border border-slate-600 shadow-xl p-2 mt-10"
			>
				{({ open }) => (
					<>
						<Disclosure.Button className="rounded-lg flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500">
							<span>More helpful links</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className={`${open ? 'rotate-180' : ''} h-5 w-5`}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
							https://stackoverflow.com/help/minimal-reproducible-example When
							appropriate, share the minimum amount of code others need to
							reproduce your problem{' '}
							<a
								className="text-blue-500 font-bold hover:text-blue-300"
								href="https://stackoverflow.com/help/minimal-reproducible-example"
							>
								(also called a minimum, reproducible example)
							</a>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
}

export default Accordian;
