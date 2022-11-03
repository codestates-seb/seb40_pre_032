/* eslint-disable */
export default function elapsed(string) {
	const minute = 1000 * 60;
	const hour = minute * 60;
	const day = hour * 24;
	const month = day * 30;
	const year = day * 365;

	const today = new Date();
	const targetDate = new Date(string);
	const elapsedSec = today.getTime() - targetDate.getTime();

	const elapsedMin = Math.floor(elapsedSec / minute);
	const elapsedHour = Math.floor(elapsedSec / hour);
	const elapsedDay = Math.floor(elapsedSec / day);
	const elapsedMonth = Math.floor(elapsedSec / month);
	const elapsedYear = Math.floor(elapsedSec / year);

	if (elapsedYear > 0) {
		if (elapsedYear > 1) return `${elapsedYear} years ago`;
		return '1 year ago';
	}
	if (elapsedMonth > 0) {
		if (elapsedMonth > 1) return `${elapsedMonth} months ago`;
		return '1 month ago';
	}
	if (elapsedDay > 0) {
		if (elapsedDay > 1) return `${elapsedDay} days ago`;
		return '1 day ago';
	}
	if (elapsedHour > 0) {
		if (elapsedHour > 1) return `${elapsedHour} hours ago`;
		return '1 hour ago';
	}
	if (elapsedMin > 0) {
		if (elapsedMin > 1) return `${elapsedMin} mins ago`;
		return '1 min ago';
	}
	if (elapsedSec > 0) {
		if (elapsedSec > 1) return `${Math.round(elapsedSec / 1000)} seconds ago`;
		return '1 second ago';
	}
	return null;
}
