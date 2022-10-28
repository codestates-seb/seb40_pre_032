import React from 'react';
import ButtonGroup from './ButtonGroup';
import items from './Dummydata';

function Qlist() {
	const questions = items;
	return (
		// ml 나중에 꼭 없앨것.
		<div className="p-[24px] w-[727px]  border-l-[1px] border-solid border-[hsl(210,8%,85%)] mb-4 ml-12">
			<div className="flex flex-wrap mb-[12px] justify-between ">
				<h1 className="select-auto text-[1.61538462rem]">All Questions</h1>
				<div className="cursor-pointer mb-[12px] align-baseline h-[35px] w-[100px] bg-[hsl(206,100%,52%)] text-center rounded-[3px] pt-[2px] hover:bg-[hsl(206,100%,40%)]">
					<a href="https:// www.naver.com" className=" text-[13px] text-white">
						Ask Question
					</a>
				</div>
			</div>
			<div className="text-left w-[727px] h-[35px] flex mb-[12px] items-center justify-between">
				<div>{questions.length} questions</div>
				<ButtonGroup />
			</div>
			{questions.map((question) => (
				<div className="border-t-[1px] border-solid border-[hsl(210,8%,85%)] w-auto float-none clear-both ml-[-24px] ">
					<div className="border-solid border-b-[1px] border-[hsl(210,8%,85%)] relative flex  p-[16px] align-baseline">
						<div className="mr-4 mb-1 gap-[6px] w-[108px] flex shrink-0 flex-col flex-wrap items-end text-[13px] text-[hsl(210,8%,45%)] align-baseline text-left">
							<div className=" inline-flex gap-[4px] items-center text-[#0C0D0E] justify-center whitespace-nowrap border-[1px] border-solid border-transparent">
								<span className="font-medium">{question.score}</span>
								<span className="font-medium">votes</span>
							</div>
							<div className=" inline-flex gap-[4px] items-center text-[#hsl(210,8%,5%)] justify-center whitespace-nowrap border-[1px] border-solid border-transparent">
								<span className="font-medium">{question.answer_count}</span>
								<span className="font-medium">answers</span>
							</div>
							<div className=" inline-flex gap-[4px] items-center text-[#hsl(210,8%,5%)] justify-center whitespace-nowrap border-[1px] border-solid border-transparent">
								<span className="font-medium">{question.view_count}</span>
								<span className="font-medium">views</span>
							</div>
						</div>
						<div className="grow max-w-full">
							<h3 className="font-normal block text-[18px] text-[#1f7ad1] mt-[-0.15rem] mb-[0.4rem] pr-[24px] leading-snug break-all">
								<a href="https://www.naver.com" className="">
									{question.title}
								</a>
							</h3>
							<div className="mt-[-2px] mb-[8px] text-[13px] text-[hsl(210,8%,25%)] break-all">
								When I load up my IFC.js viewer and add my models to the scene,
							</div>
							<div className="flex items-center justify-between flex-wrap">
								<div className="flex gap-[4px] leading-[18px] float-left flex-wrap">
									<ul className="inline list-none m-0 p-0">
										{question.tags.map((tag) => (
											<li className="inline mr-[4px] text-[12px]">
												<a
													href="https://www.naver.com"
													className=" hover: rounded-[3px] bg-[hsl(205,53%,88%);] bg-[#e0ecf3] py-[0.4rem] px-[0.5rem] my-[2px] mr-[2px] ml-0 text-[hsl(205,47%,42%)]"
												>
													{tag}
												</a>
											</li>
										))}
									</ul>
								</div>
								<div>
									<div className="text-[#6aa1de] text-[12px]">
										{question.owner.display_name}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Qlist;
