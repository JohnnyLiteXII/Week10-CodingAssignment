

let id = 0;

// Function to handle form submission and add a new student
document.getElementById('add').addEventListener('submit', function (event) {
    event.preventDefault();
    let nameInput = document.getElementById('name');
    let ageInput = document.getElementById('age');
    let gradeInput = document.getElementById('grade');
    let subjectInput = document.getElementById('subject');
    
    let name = nameInput.value.trim();
    let age = ageInput.value.trim();
    let grade = gradeInput.value.trim();
    let subject = subjectInput.value.trim();

    if (name && age && grade && subject) {
        addStudentRow(name, age, grade, subject);
        nameInput.value = '';
        ageInput.value = '';
        gradeInput.value = '';
        subjectInput.value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

// Function to add a new student row to the table
function addStudentRow(name, age, grade, subject) {
    let tableBody = document.getElementById('student-table');
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${grade}</td>
        <td>${subject}</td>
    `;
    tableBody.appendChild(newRow);
}


