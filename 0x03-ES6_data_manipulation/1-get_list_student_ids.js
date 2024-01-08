export default function getListStudentIds(getListStudents) {
  if (typeof(getListStudents) !== 'object') return [];
  const arrayOfIds = getListStudents.map(({ id }) => id);
  return arrayOfIds;
}
    
