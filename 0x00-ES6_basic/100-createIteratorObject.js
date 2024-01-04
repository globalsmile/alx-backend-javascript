export default function createIteratorObject(report) {
  const itr = report.allEmployees;
  const itr2 = Object.values(itr);
  const itr3 = [];
  for (const name of itr2) {
    itr3.push(...name);
  }
  return itr3;
}
