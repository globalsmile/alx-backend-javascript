interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    location: 'San Francisco'
};
const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 20,
    location: 'San Francisco'
};

const studentsList: Array<Student> = [student1, student2];

const body = document.querySelector('body');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const trHead = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
const th4 = document.createElement('th');
const th5 = document.createElement('th');
th1.innerHTML = 'firstName';
th2.innerHTML = 'lastName';
th3.innerHTML = 'age';
th4.innerHTML = 'location';
trHead.appendChild(th1);
trHead.appendChild(th2);
trHead.appendChild(th3);
trHead.appendChild(th4);
thead.appendChild(trHead);
table.appendChild(thead);
studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    td1.innerHTML = student.firstName;
    td4.innerHTML = student.location;
    tr.appendChild(td1);
    tr.appendChild(td4);
    tbody.appendChild(tr);
});