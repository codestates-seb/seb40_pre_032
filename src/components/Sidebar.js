import React from 'react';
import { IoPencilSharp } from 'react-icons/io5';
import { FcAbout } from 'react-icons/fc';
import { DiStackoverflow } from 'react-icons/di';

function Sidebar() {
	return (
		<div>
			<div className="w-[300px] mb-4 shadow-sidebar">
				<ul>
					<li className="px-[15px] py-[12px] bg-[#fbf4d5] text-[12px] font-bold text-[#5c6067]">
						The Overflow Blog
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<IoPencilSharp className="mt-[2px] mr-[12px]" />
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<a
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] "
								>
									A flight simulator for developers to practice real world
									challenges and ...
								</a>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<IoPencilSharp className="mt-[2px] mr-[12px]" />
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<a
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] "
								>
									Goodbye Webpack, hello Turbopack! The big news from today’s
									Next.JS conference
								</a>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fbf4d5] text-[12px] font-bold text-[#5c6067]">
						Featured on Meta
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<FcAbout className="mt-[2px] mr-[12px]" />
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<a
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] "
								>
									The 2022 Community-a-thon has begun!
								</a>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<FcAbout className="mt-[2px] mr-[12px]" />
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<a
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] "
								>
									Mobile app infrastructure being decommissioned
								</a>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<DiStackoverflow className="mt-[2px] mr-[12px]" />
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<a
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] "
								>
									Staging Ground Workflow: Canned Comments
								</a>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<DiStackoverflow className="mt-[2px] mr-[12px]" />
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<a
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] "
								>
									The Ask Wizard (2022) has graduated
								</a>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fbf4d5] text-[12px] font-bold text-[#5c6067]">
						Hot Meta Posts
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<span className="mr-[12px] text-[14px]">5</span>
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<a
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] "
								>
									What should be done about [explode]?
								</a>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<span className="mr-[12px] text-[14px]">8</span>
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<a
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] "
								>
									Announcing the Content Discovery initiative
								</a>
							</p>
						</div>
					</li>
				</ul>
			</div>
			<div className="w-[300px] mb-[16px] shadow-sidebar">
				<ul>
					<li className="px-[15px] py-[12px] bg-[#f7faf9] border-b-[1px] text-[14px] text-[#5c6067]">
						<div>Custom Filters</div>
					</li>
					<li className="h-[50px] flex items-center">
						<p className="text-[13px] ml-[15px] leading-none text-[#2c83d0] border-[#d8dade] border-solid hover:cursor-pointer">
							Create a custom filter
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
