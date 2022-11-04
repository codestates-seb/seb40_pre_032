import { atom } from 'recoil';

const api = atom({
	key: 'api',
	default: 'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/',
});

export default api;
