let studentIdE = document.getElementById('student__id');
let nameE = document.getElementById('name');
let emailE = document.getElementById('email');
let mathE = document.getElementById('math');
let physicE = document.getElementById('physic');
let chemicalE = document.getElementById('chemical');
let indexE = document.getElementById('index');

//Add Student
const addNewStudent = () => {
    let students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];
    students.push({
        id: studentIdE.value,
        name: nameE.value,
        email: emailE.value,
        math: mathE.value,
        physic: physicE.value,
        chemical: chemicalE.value
    })
    localStorage.setItem("students", JSON.stringify(students));
    renderStudent();
    document.getElementById('form-control-student').reset();
}
 
//Render Student
function renderStudent() {
    let students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];
    let contentHTML = "";
    students.map((student, index) => {
        let contentTr = `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${(Number(student.math) + Number(student.physic) + Number(student.chemical)) / 3}</td>
                <td class="group-btn-table">
                    <button class="btn btn-table edit" onclick="editStudent(${index})">Edit</button>
                    <button class="btn btn-table delete" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `
        contentHTML += contentTr;
    })
    document.getElementById('table-body').innerHTML = contentHTML
}

//Edit Student
function editStudent(index) {
    let students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];
    studentIdE.disabled = true;
    nameE.focus();
    studentIdE.value = students[index].id
    nameE.value = students[index].name
    emailE.value = students[index].email
    mathE.value = students[index].math
    physicE.value = students[index].physic
    chemicalE.value = students[index].chemical
    indexE.value = index;
}

//Update Student
function updateStudent() {
    let students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];
    let index = indexE.value;
    students[index] = {
        id: studentIdE.value,
        name: nameE.value,
        email: emailE.value,
        math: mathE.value,
        physic: physicE.value,
        chemical: chemicalE.value
    }
    localStorage.setItem("students", JSON.stringify(students));
    renderStudent()
    studentIdE.disabled = false;
    document.getElementById('form-control-student').reset();
}

//Delete Student
const deleteStudent = (index) => {
    let students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    renderStudent(students);
}

//Delete All Student
const resetStudent = () => {
    students = [];
    localStorage.removeItem("students")
    renderStudent(students)
}
