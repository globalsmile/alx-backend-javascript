import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(getListStudents) {
  const studentIds = getListStudentIds(getListStudents);
  const initVal = 0;
  return studentIds.reduce((accumulator, currentValue) => accumulator + currentValue, initVal);
}
