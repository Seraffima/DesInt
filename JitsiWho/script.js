import { classDang1, classDang2 } from './clases.js';

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            localStorage.setItem('attendanceData', content);
            detectClass(content);
        };
        reader.readAsText(file);
    }
}

function detectClass(content) {
    const lines = content.split('\n');
    const presentStudents = new Set();
    let className = '';
    const classDang1Students = new Set(classDang1.getStudents().map(student => `${student.firstName} ${student.lastName}`.trim()));
    const classDang2Students = new Set(classDang2.getStudents().map(student => `${student.firstName} ${student.lastName}`.trim()));

    lines.forEach(line => {
        const match = line.match(/((\w+ ){1,2}(\w+ ){1,3})says:\[Presente\]/);
        if (match) {
            const studentName = match[1].trim();
            presentStudents.add(studentName);

            if (classDang1Students.has(studentName)) {
                className = 'classDang1';
            } else if (classDang2Students.has(studentName)) {
                className = 'classDang2';
            }
        }
    });

    localStorage.setItem('presentStudents', JSON.stringify([...presentStudents]));
    localStorage.setItem('className', className);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fileuploader').addEventListener('change', handleFileSelect);
});