import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
// import { useRecoilValue } from 'recoil';
// import api from './_state/api';

function HeaderInput() {
	// const address = useRecoilValue(api);
	const [value, setValue] = useState('');
	const matched = value.match(/\[(.*?)\]/);
	function fetchSearch() {
		// 조건이 3개여야 함
		// 문자열일때,
		// 태그일때
		// 그냥 빈 저거일때
		if (matched === null) {
			return axios.get(
				`http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/search?q=${encodeURIComponent(
					value,
				)}`,
			);
		}
		return axios.get(
			`http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/search/tag?tag=${encodeURIComponent(
				matched[1],
			)}`,
		);
	}
	const { refetch } = useQuery([`questions`], fetchSearch, {
		enabled: false,
		staleTime: 5000,
		cacheTime: Infinity,
		suspense: true,
		refetchOnWindowFocus: false,
	});
	useEffect(() => {
		setValue(value);
		console.log(value);
		console.log(matched);
	}, [value]);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		refetch();
	};
	return (
		<form
			className="align-baseline relative text-[100%] flex px-2 w-[773px] items-center"
			onSubmit={handleSubmit}
		>
			<svg className="w-[20px] h-[18px] absolute left-[15px] fill-[hsl(210,8%,55%)] ">
				<path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z" />
			</svg>
			<input
				onChange={onChange}
				value={value}
				placeholder="Search..."
				className=" focus: cursor-text border border-[#babec4] focus:ring-[5px]  focus:ring-blue-500/[.10] focus:outline focus:border-[0.5px] focus:outline-[hsl(206,90%,69.5%)] rounded-[3px] border-solid truncate w-full pl-[30px] h-[33px] "
			/>
		</form>
	);
}
export default HeaderInput;
