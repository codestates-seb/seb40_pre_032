import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

export default function DisplayName({ question }) {
	const { refetch } = useQuery(
		['questions'],
		() => {
			return axios.get(
				`http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/search/user/${encodeURIComponent(
					question.owner.userId,
				)}`,
			);
		},
		{
			staleTime: Infinity,
			cacheTime: Infinity,
			suspense: true,
		},
	);

	return (
		<button
			type="button"
			className="text-[#6aa1de] text-[12px]"
			onClick={refetch}
		>
			{question.owner.displayName}
		</button>
	);
}
