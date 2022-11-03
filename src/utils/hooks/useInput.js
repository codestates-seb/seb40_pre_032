import axios from 'axios';
import useQuery from 'react-query';

function fetchQuestionById(api, id) {
	return axios.get(`${api}/${id}`);
}

export default function getQuestionById(id) {
	return useQuery(['question', id], fetchQuestionById);
}
