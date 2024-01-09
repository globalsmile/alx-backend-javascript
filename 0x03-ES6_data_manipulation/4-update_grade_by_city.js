export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const listStudents = getListStudents;
  const students = listStudents.filter((student) => student.location === city);
  return students.map((student) => {
    const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id)[0];
    if (grade) {
      return { ...student, grade: grade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
