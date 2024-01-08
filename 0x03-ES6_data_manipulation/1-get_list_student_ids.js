export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) return [];
  const arrayOfIds = getListStudents.map(({ id }) => id);
  return arrayOfIds;
}
