import { classDang1, classDang2 } from './clases.js';

//Crear div de estudiante
function createStudentDiv(firstName, lastName, imageUrl, isPresent) {
    const studentDiv = document.createElement('div');
    studentDiv.className = 'student';

//Agrega la imagen del estudiante
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `${firstName} ${lastName}`;
    studentDiv.appendChild(img);

//Agrega el nombre del estudiante
    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.textContent = `${lastName}, ${firstName}`;
    studentDiv.appendChild(nameDiv);

//Agrega los checkboxes de la asistencia
  const labels = ['I', 'J', 'R'];
  labels.forEach(label => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = label;
      checkbox.name = label;
      if (label === 'I' && !isPresent) {
          checkbox.checked = true;
      }

      const checkboxLabel = document.createElement('label');
      checkboxLabel.htmlFor = label;
      checkboxLabel.textContent = label;

      studentDiv.appendChild(checkbox);
      studentDiv.appendChild(checkboxLabel);
  });

    return studentDiv;
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const presentStudents = new Set(JSON.parse(localStorage.getItem('presentStudents')));
    const className = localStorage.getItem('className');
    let students = [];

    if (className === 'classDang1') {
        students = classDang1.getStudents();
    } else if (className === 'classDang2') {
        students = classDang2.getStudents();
    }

    students.forEach(student => {
        const fullName = `${student.firstName} ${student.lastName}`.trim();
        const isPresent = presentStudents.has(fullName);
        const studentDiv = createStudentDiv(student.firstName, student.lastName, student.image, isPresent);
        grid.appendChild(studentDiv);
    });
});