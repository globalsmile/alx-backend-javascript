export default function createIteratorObject(report) {
	let itr = report.allEmployees;
	let itr2 = Object.values(itr);
	let itr3 = [];
	for (let idx in itr2) {
		itr3.push(...itr2[idx]);
	}
	return itr3;
}
