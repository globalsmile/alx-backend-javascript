import { Cpp } from "./Cpp";
import { Java } from "./Java";
import { React } from "./React";
import { Teacher, Subject } from "./Subject";

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

const cTeacher: Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10
}

cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
