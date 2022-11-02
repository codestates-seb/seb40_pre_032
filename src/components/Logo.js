import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

function Logo() {
	const { refetch } = useQuery(
		[`questions`],
		() => {
			return axios.get(
				`http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/questions/`,
			);
		},
		{
			enabled: false,
			staleTime: 5000,
			cacheTime: Infinity,
			suspense: true,
			refetchOnWindowFocus: false,
		},
	);

	return (
		<div>
			<Link
				to="/"
				className="cursor-pointer pb-[6px] px-2 flex items-center bg-transparent w-[166px] h-[47px] hover:bg-[hsl(210,8%,90%)]"
				onClick={refetch}
			>
				<img
					alt="stackoverflow logo"
					src="/img/stack.png"
					className="w-[150px] h-[30px]"
				/>
			</Link>
		</div>
	);
}

export default Logo;
