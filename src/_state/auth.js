import { atom } from 'recoil';

const authAtom = atom({
	// get initial state from local storage to enable user to stay logged in
	key: 'auth',
	default: 'not',
});
export default authAtom;
