export const genDSUID = () => {
	const genRanHex = (size) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
	return genRanHex(34).toUpperCase();
};
