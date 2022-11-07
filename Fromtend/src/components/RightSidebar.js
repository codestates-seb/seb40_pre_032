import React from 'react';
import { IoPencilSharp } from 'react-icons/io5';
import { FcAbout } from 'react-icons/fc';
import { DiStackoverflow } from 'react-icons/di';

function RightSidebar() {
	return (
		<div>
			<div className="shadow-sidebar w-[300px] mb-4 mt-5">
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
								<span
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] hover:cursor-pointer"
								>
									A flight simulator for developers to practice real world
									challenges and ...
								</span>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<IoPencilSharp className="mt-[2px] mr-[12px]" />
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<span
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] hover:cursor-pointer"
								>
									Goodbye Webpack, hello Turbopack! The big news from today’s
									Next.JS conference
								</span>
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
								<span
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] hover:cursor-pointer"
								>
									The 2022 Community-a-thon has begun!
								</span>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<FcAbout className="mt-[2px] mr-[12px]" />
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<span
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] hover:cursor-pointer"
								>
									Mobile app infrastructure being decommissioned
								</span>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<DiStackoverflow className="mt-[2px] mr-[12px]" />
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<span
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] hover:cursor-pointer"
								>
									Staging Ground Workflow: Canned Comments
								</span>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<DiStackoverflow className="mt-[2px] mr-[12px]" />
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<span
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] hover:cursor-pointer"
								>
									The Ask Wizard (2022) has graduated
								</span>
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
								<span
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] hover:cursor-pointer"
								>
									What should be done about [explode]?
								</span>
							</p>
						</div>
					</li>
					<li className="px-[15px] py-[12px] bg-[#fdf6e2] flex">
						<div className="flex">
							<span className="mr-[12px] text-[14px]">8</span>
						</div>
						<div>
							<p className="leading-none text-[#44484e]">
								<span
									alt="blog"
									href="https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.40559266.1665488685.1666579320-1114189058.1664270168"
									className="text-[13px] hover:cursor-pointer"
								>
									Announcing the Content Discovery initiative
								</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
			<div className="border-solid  border w-[300px] mb-[16px] shadow-sidebar border-[hsl(210,8%,85%)]">
				<ul>
					<li className="px-[15px] py-[12px] bg-[#f7faf9] border-b-[1px] text-[14px] text-[#5c6067]">
						<div>Custom Filters</div>
					</li>
					<li className="h-[50px] flex items-center">
						<p className="text-[13px] ml-[15px] leading-none text-[#2c83d0]  hover:cursor-pointer">
							Create a custom filter
						</p>
					</li>
				</ul>
			</div>
			<div className="border-solid  border w-[300px] mb-[16px] shadow-sidebar border-[hsl(210,8%,85%)]">
				<ul>
					<li className="px-[15px] py-[12px] bg-[#f7faf9] border-b-[1px] text-[14px] text-[#5c6067]">
						<div>Watched Tags</div>
					</li>
					<li className="h-[50px] flex items-center">
						<div>
							<p className="text-[13px] text-[#64686e] ml-[15px] leading-none border-[#d8dade] border-solid hover:cursor-pointer">
								Watch tags to curate your list of questions.
							</p>
						</div>
					</li>
				</ul>
			</div>
			<div className="border-solid  border w-[300px] mb-[16px] shadow-sidebar border-[hsl(210,8%,85%)]">
				<ul>
					<li className="px-[15px] py-[12px] bg-[#f7faf9] border-b-[1px] text-[14px] text-[#5c6067]">
						<div>Ignored Tags</div>
					</li>
					<li className="py-[16px] h-[67px] flex items-center justify-center px-[15px]">
						<div className="border-border-blue rounded-[5px] border-solid flex border h-[34px] hover:bg-[#b3d3e9] text-[#37739c] bg-[#e0ecf3] text-[13px]">
							<button
								type="button"
								className="flex items-center justify-center decoration-[#e0ecf3] p-[9.6px]"
							>
								Add an Ignored Tag
							</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default RightSidebar;
