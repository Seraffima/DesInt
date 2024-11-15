import { classDang1 } from './clases.js';

function createStudentDiv(firstName, lastName, imageUrl) {
    // Create the main div
    const studentDiv = document.createElement('div');
    studentDiv.className = 'student';

    // Create and append the image
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `${firstName} ${lastName}`;
    studentDiv.appendChild(img);

    // Create and append the name
    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.textContent = `${firstName} ${lastName}`;
    studentDiv.appendChild(nameDiv);

    // Create and append the checkboxes
    const labels = ['J', 'I', 'R'];
    labels.forEach(label => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = label;
        checkbox.name = label;

        const checkboxLabel = document.createElement('label');
        checkboxLabel.htmlFor = label;
        checkboxLabel.textContent = label;

        studentDiv.appendChild(checkbox);
        studentDiv.appendChild(checkboxLabel);
    });

    return studentDiv;
}

document.addEventListener('DOMContentLoaded', () => {
    // Get the grid element
    const grid = document.getElementById('grid');
    console.log('Grid element:', grid);

    // Check if classDang1 is imported correctly
    console.log('classDang1:', classDang1);

    // Iterate over the students in classDang1 and create a div for each student
    classDang1.getStudents().forEach(student => {
        console.log('Creating div for student:', student);
        const studentDiv = createStudentDiv(student.firstName, student.lastName, student.image);
        grid.appendChild(studentDiv);
    });
});