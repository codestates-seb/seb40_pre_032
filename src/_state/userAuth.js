import { atom } from 'recoil';

const userAtom = atom({
	// get initial state from local storage to enable user to stay logged in
	key: 'user',
	default: '',
});
export default userAtom;
